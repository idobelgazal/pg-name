
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCf8q_Hk1VAVmKjlcRsauUT9i05n2EjL4",
  authDomain: "pg-panel-4cb01.firebaseapp.com",
  projectId: "pg-panel-4cb01",
  storageBucket: "pg-panel-4cb01.firebasestorage.app",
  messagingSenderId: "1082222345306",
  appId: "1:1082222345306:web:2f416498b469274a052c63",
  measurementId: "G-5ZFLQ5HM49"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

document.body.innerHTML += `
  <div id="login-form">
    <input id="email" placeholder="Email" type="email"><br>
    <input id="password" placeholder="Password" type="password"><br>
    <button onclick="login()">Login</button>
  </div>
  <div id="admin-area" style="display:none;">
    <h2>Welcome Admin</h2>
    <div id="logs"></div>
  </div>
`;

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("login-form").style.display = "none";
      document.getElementById("admin-area").style.display = "block";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};
