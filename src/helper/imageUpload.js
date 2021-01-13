import { firebaseOrigin, firebaseStore } from "../Config/firebase";

export const onFinishWorksForm = (fileList, userName) => {
  const promises = [];
  const photoURLs = [];

  const updateFireStorage = () => {
    firebaseStore
      .collection("users")
      .doc(userName)
      .update({ works: photoURLs })
      .then(function () {
        return 1;
      });
  };

  fileList.forEach((file) => {
    const uploadTask = firebaseOrigin
      .storage()
      .ref()
      .child(`images/${userName}/${file.name}`)
      .put(file.originFileObj);
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
        photoURLs.push({
          uid: file.uid,
          name: file.name,
          status: "done",
          url: downloadURL,
        });
        if (photoURLs.length === promises.length) {
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
