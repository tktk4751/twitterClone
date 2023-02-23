import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgpkhGvLDK9xpts9AgFMJtveaIS78fKhM",
  authDomain: "test-a8674.firebaseapp.com",
  projectId: "test-a8674",
  storageBucket: "test-a8674.appspot.com",
  messagingSenderId: "136203029966",
  appId: "1:136203029966:web:5fc516fb0aecd86f6bef9f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
