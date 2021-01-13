import { firebaseOrigin, firebaseStore } from "../../../Config/firebase";

export const onFinishWorksForm = (fileList, userName) => {
  const promises = [];
  const skills = [];

  const updateFireStorage = () => {
    firebaseStore
      .collection("users")
      .doc(userName)
      .update({ skills: skills })
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
      .child(`images/${userName}/${originFile.originFileObj.uid}`)
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
        skills.push({
          name: name,
          description: description,
          url: downloadURL,
        });
        if (skills.length === promises.length) {
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
