import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyDzlLnFqHo3p_Rbq_cyds4-D4kvMivj0XI",
 authDomain: "ai-flashcard-ae7a9.firebaseapp.com",
 projectId: "ai-flashcard-ae7a9",
 storageBucket: "686706759754",
 messagingSenderId: "1:686706759754:web:107e58fb0da95b3bb6aeb3",
 appId: "G-C470217BY2",
 measurementId: "G-C470217BY2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;