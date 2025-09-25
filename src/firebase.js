import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB98FWOn_hjMrOXPuy6KbNv4DvSKxVGyzM",
  authDomain: "netflix-clone-fe000.firebaseapp.com",
  projectId: "netflix-clone-fe000",
  storageBucket: "netflix-clone-fe000.firebasestorage.app",
  messagingSenderId: "269295133098",
  appId: "1:269295133098:web:b00b2918692db491b14bd3",
  measurementId: "G-3YX1DGTKDV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    console.log("User created successfully");
  } catch (error) {
    console.log(error);
    throw error; 
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully");
  } catch (error) {
    console.log(error);
    throw error; 
  }
};

const logOut = () => {
  signOut(auth);
};

export { auth, db, login, signUp, logOut };



// git add .
// git commit -m "Updated project"
// git push origin main
