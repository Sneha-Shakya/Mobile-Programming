  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getDatabase, set, get, ref, update, remove, push } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA4MBolkXH2Is96DU4WqaC6g4vtC-Rtt0Q",
    authDomain: "mobile-programming-c65fe.firebaseapp.com",
    projectId: "mobile-programming-c65fe",
    storageBucket: "mobile-programming-c65fe.firebasestorage.app",
    messagingSenderId: "654332904224",
    appId: "1:654332904224:web:514b11e234336e1cfecd45",
    measurementId: "G-YKCCX3GN8K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  console.log(db);
 
function writeUserData(userId, name, email) {
  set(ref(db, "users/" + userId), {
    name: name,
    email: email
  })
  .then(() => {
    console.log("User added successfully");
  })
  .catch((error) => {
    console.error(error);
  });
}

// FORM HANDLER
window.addUser = function (event) {
  event.preventDefault();

  const userId = document.getElementById("userId").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  writeUserData(userId, name, email);
};

// READ USERS
window.readUser = function () {
  const userRef = ref(db, "users");
  get(userRef).then((snapshot) => {
    snapshot.forEach((child) => {
      console.log(child.val());
    });
  });
};

// UPDATE USER
window.updateUser = function () {
  const userId = document.getElementById("userId").value;
  update(ref(db, "users/" + userId), {
    name: "Updated Name"
  })
  .then(() => console.log("User updated"));
};

// DELETE USER
window.deleteUser = function () {
  const userId = document.getElementById("userId").value;
  remove(ref(db, "users/" + userId))
    .then(() => console.log("User deleted"));
};
