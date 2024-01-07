interface IFirebaseUserState {
  firebaseUser: {
    uid: string | null;
    email: string | null;
    displayName: string | null;
  };
}

export default IFirebaseUserState;
