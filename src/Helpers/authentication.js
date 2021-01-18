import {firebaseStore} from "../Config/firebase";

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firebaseStore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const generateUserDocument = async (user) => {
  if (!user) return;
  const userRef = firebaseStore.doc(`users/${user.uid}`);
  const userData = await userRef.get();
  if (!userData.exists) {
      console.log(user);
    try {
      await userRef.set(
        {userId : user.uid,
        name: user.displayName,
    email: user.email}
      );
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};