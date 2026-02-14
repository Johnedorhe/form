import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUxegXw7qGIXXJqA1Bu5-NU27-GUNWUN8",
  authDomain: "my-auth-app-d3ad8.firebaseapp.com",
  projectId: "my-auth-app-d3ad8",
  storageBucket: "my-auth-app-d3ad8.firebasestorage.app",
  messagingSenderId: "1055886010441",
  appId: "1:1055886010441:web:124d60e9b3274725167798"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Ensure user stays logged in after refresh
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("Persistence set"))
  .catch((error) => console.error("Persistence error:", error));