const firebaseConfig = { 
    apiKey: "AIzaSyCOsD5O4hPEV0-uP3Eiud9V3hUZjQXZCqk", 
    authDomain: "kwitter-9e723.firebaseapp.com", 
    databaseURL: "https://kwitter-9e723-default-rtdb.firebaseio.com", 
    projectId: "kwitter-9e723", 
    storageBucket: "kwitter-9e723.appspot.com", 
    messagingSenderId: "1004747225248", 
    appId: "1:1004747225248:web:59dcdd842d89928b10f1c5" 
}; // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  function addUser(){
    var un=document.getElementById("userName").value;
    firebase.database().ref("/").child(un).update({
        purpose:"au"
    });
  }