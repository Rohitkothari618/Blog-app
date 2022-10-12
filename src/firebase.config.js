import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBzZSzdDFuzcwoJ2q9xsNX3WDPMVz-7iaE',
  authDomain: 'blog-app-68442.firebaseapp.com',
  projectId: 'blog-app-68442',
  storageBucket: 'blog-app-68442.appspot.com',
  messagingSenderId: '83438102231',
  appId: '1:83438102231:web:3638b3b3fbcba97a0c7292',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
