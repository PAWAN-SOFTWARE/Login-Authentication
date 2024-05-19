 // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
  apiKey: "AIzaSyDMVNE8WZ2qrbWp6X953xHFgG9KF4M1740",
  authDomain: "login-authentication-f3311.firebaseapp.com",
  projectId: "login-authentication-f3311",
  storageBucket: "login-authentication-f3311.appspot.com",
  messagingSenderId: "340412944117",
  appId: "1:340412944117:web:0a20a8409389f3dc647fbc",
  measurementId: "G-H88XD5TF4V"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();

    // Function to switch between registration and login containers
    function showRegistration() {
        document.getElementById("registration-container").style.display = "block";
        document.getElementById("login-container").style.display = "none";
    }

    function showLogin() {
        document.getElementById("registration-container").style.display = "none";
        document.getElementById("login-container").style.display = "block";
    }

    // Event listeners for navigation links
    document.getElementById("register-page-link").addEventListener("click", showRegistration);
    document.getElementById("login-page-link").addEventListener("click", showLogin);

    //----- New Registration code start
    document.getElementById("register").addEventListener("click", function() {
        var email =  document.getElementById("email").value;
        var password = document.getElementById("password").value;

        //For new registration
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                alert("Registration successfully!!");
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                alert(errorMessage);
            });
    });

    //----- Login code start
    document.getElementById("login").addEventListener("click", function() {
        var email = document.getElementById("login_email").value;
        var password = document.getElementById("login_password").value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            alert(user.email + " Login successfully!!!");

            // Redirect to dashboard page
            window.location.href = "dashboard.html"; // Change "dashboard.html" to your actual dashboard page
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
    });

    //----- Logout code start
    document.getElementById("logout").addEventListener("click", function() {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Sign-out successful.');
            alert('Sign-out successful.');
            document.getElementById('logout').style.display = 'none';
        }).catch((error) => {
            // An error happened.
            console.log('An error happened.');
        });
    });
