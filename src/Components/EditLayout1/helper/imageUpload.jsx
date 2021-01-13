import { firebaseOrigin, firebaseStore } from "../../../Config/firebase";
import { message } from "antd";

export const onFinishWorksForm = (fileList, userName, fieldName) => {
  const promises = [];
  const data = [];

  const updateFireStorage = () => {
    firebaseStore
      .collection("users")
      .doc(userName)
      .update({ [fieldName]: data })
      .then(function () {
        return 1;
      });
  };

  fileList.forEach((file) => {
    const { name, description, originFile } = file;
    console.log(file);
    const uploadTask = firebaseOrigin
      .storage()
      .ref()
      .child(`images/${userName}/${fieldName}/${originFile.originFileObj.uid}`)
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
        if (data.length === promises.length) {
          return updateFireStorage();
        }
      }
    );
  });
  updateFireStorage();
  // }
  Promise.all(promises)
    .then(function () {
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
