import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDba5Vtm2gyT7DCW4N2UQpIorayU7z9LD0",
  authDomain: "ta-learning-platform.firebaseapp.com",
  projectId: "ta-learning-platform",
  storageBucket: "ta-learning-platform.firebasestorage.app",
  messagingSenderId: "433031981690",
  appId: "1:433031981690:web:40704f18a0ddfcdc8fe9c3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Analytics (safe)
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) getAnalytics(app);
  });
}
