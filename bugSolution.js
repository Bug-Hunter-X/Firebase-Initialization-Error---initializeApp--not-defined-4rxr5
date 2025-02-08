import { initializeApp } from "firebase/app";
// ... other imports

// Ensure you have the correct Firebase packages installed.
//  npm install firebase

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // ... other config values
  projectId: "your-project-id", //Ensure you have this
  storageBucket: "your-storage-bucket", //Ensure you have this
  messagingSenderId: "your-messaging-sender-id", //Ensure you have this
  appId: "your-app-id", //Ensure you have this
  measurementId: "your-measurement-id" //Ensure you have this
};

const app = initializeApp(firebaseConfig);

// Verify Firebase is initialized:
console.log('Firebase initialized:', app);

// ... rest of your Firebase code