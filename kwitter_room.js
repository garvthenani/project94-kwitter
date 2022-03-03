
const firebaseConfig = {
  apiKey: "AIzaSyDkxKLL0rxoHiU1g_wGfriSU80tZZRRnSc",
  authDomain: "kwitter-c9a79.firebaseapp.com",
  databaseURL: "https://kwitter-c9a79-default-rtdb.firebaseio.com",
  projectId: "kwitter-c9a79",
  storageBucket: "kwitter-c9a79.appspot.com",
  messagingSenderId: "287765972404",
  appId: "1:287765972404:web:8ade03b99e030086e31ee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
