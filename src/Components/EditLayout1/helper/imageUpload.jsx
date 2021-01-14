import { firebaseOrigin, firebaseStore } from "../../../Config/firebase";
import { message } from "antd";

export const uploadDataOnlyText = async (data, userName, fieldName) => {
  const userRef = firebaseStore.doc(`users/layout1/${userName}`);
  const userData = await userRef.get();
  console.log(data);
  if (!userData.exists) {
    userRef.set({ [fieldName]: data });
  } else {
    userRef.update({ [fieldName]: data });
  }
};

export const uploadDataWithImg = (fileList, userName, fieldName) => {
  const promises = [];
  const data = [];

  fileList.forEach((file) => {
    const { originFile } = file;
    console.log(file);
    const uploadTask = firebaseOrigin
      .storage()
      .ref()
      .child(`images/layout1/${userName}/${fieldName}/${originFile.originFileObj.uid}`)
      .put(originFile.originFileObj);
    promises.push(uploadTask);
    uploadTask.on(
      firebaseOrigin.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (snapshot.state === firebaseOrigin.storage.TaskState.RUNNING) {
          console.log(`Progress: ${progress}%`);
        }
      },
      (error) => console.log(error),
      async () => {
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        delete file["originFile"];
        delete file["img"];
        data.push({
          ...file,
          url: downloadURL,
        });
      }
    );
  });
  // }
  Promise.all(promises)
    .then(function () {
      if (data.length === promises.length) {
        return uploadDataOnlyText(data, userName, fieldName);
      }
      console.log("complete");
    })
    .catch((err) => console.log(err.code));
};

export const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

export const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
