  //Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"; 


//import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQw9mT4rrondJbe1aO8IqhA7irvigKmdg",
  authDomain: "gymdata-6ceea.firebaseapp.com",
  projectId: "gymdata-6ceea",
  storageBucket: "gymdata-6ceea.firebasestorage.app",
  messagingSenderId: "891840403380",
  appId: "1:891840403380:web:0cd986eb066471b035c4e1",
  measurementId: "G-7TPRSKTMYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);


// Admin module

async function addAdmin(adminData) {
  const adminRef = doc(db, "Admin", adminData.id);
  await setDoc(adminRef, adminData);
}

async function addMember(memberData) {
  const memberRef = doc(db, "Members", memberData.id);
  await setDoc(memberRef, memberData);
}

async function createBill(billData) {
  const billRef = doc(db, "Bills", billData.id);
  await setDoc(billRef, billData);
}


async function sendNotification(notificationData) {
  const notificationRef = doc(db, "Notifications", notificationData.id);
  await setDoc(notificationRef, notificationData);
}

// 1. Add Data
/*
async function addMember(memberData) {
  try {
    await setDoc(doc(db, "members", memberData.id), memberData);
    console.log("Member added successfully!");
  } 
  catch (error) {
    console.error("Error adding member: ", error);
  }
}

addMember({
  id: "member123",
  name: "John Doe",
  contact: "1234567890",
  feePackage: "Monthly",
  dietPlan: "High Protein",
});


// 2. Update Data
async function updateMember(memberId, updatedData) {
  try {
    await updateDoc(doc(db, "members", memberId), updatedData);
    console.log("Member updated successfully!");
  } catch (error) {
    console.error("Error updating member: ", error);
  }
}

updateMember("member123", { feePackage: "Yearly" });


// 3. Delete Data
async function deleteMember(memberId) {
  try {
    await deleteDoc(doc(db, "members", memberId));
    console.log("Member deleted successfully!");
  } catch (error) {
    console.error("Error deleting member: ", error);
  }
}

deleteMember("member123");


// Member Module
// 1. Notification
async function getNotifications() {
  try {
    const querySnapshot = await getDocs(collection(db, "notifications"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error fetching notifications: ", error);
  }
}

getNotifications();


// 2. Search Record
async function searchMember(memberId) {
  try {
    const docRef = doc(db, "members", memberId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Member Data: ", docSnap.data());
    } else {
      console.log("No such member found!");
    }
  } catch (error) {
    console.error("Error searching for member: ", error);
  }
}

searchMember("member123");
















/* Json file for Security Rules

{
  "rules": {
    "members": {
      ".read": "auth != null && auth.token.role == 'admin' || auth.token.role == 'member'",
      ".write": "auth != null && auth.token.role == 'admin'"
    },
    "notifications": {
      ".read": "auth != null",
      ".write": "auth != null && auth.token.role == 'admin'"
    },
    "bills": {
      ".read": "auth != null && auth.token.role == 'member'",
      ".write": "auth != null && auth.token.role == 'admin'"
    }
  }
}
 */
