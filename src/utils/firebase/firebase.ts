import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<void> => {
  const res = await signInWithPopup(auth, googleProvider);
  const user = res.user;
  const q = query(collection(db, 'users'), where('uid', '==', user.uid));
  const docs = await getDocs(q);
  if (docs.docs.length === 0) {
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name: user.displayName,
      authProvider: 'google',
      email: user.email,
    });
  }
};

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<void> => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    name,
    authProvider: 'local',
    email,
  });
  await updateProfile(user, {
    displayName: name,
  });
  return user;
};

export const logout = (): void => {
  signOut(auth);
};
