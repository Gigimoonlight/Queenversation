const firebaseConfig = {
  apiKey: "AIzaSyDH0Xw-2VZD6FgiCFbATiae5Zzagj3p3PQ",
  authDomain: "queenversation.firebaseapp.com",
  databaseURL: "https://queenversation-default-rtdb.firebaseio.com",
  projectId: "queenversation",
  storageBucket: "queenversation.appspot.com",
  messagingSenderId: "941764877376",
  appId: "1:941764877376:web:2c86e63f418f68703693a5"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var un=localStorage.getItem("un");
document.getElementById("userName").innerHTML="Bem-vindo(a) "+un+" !";

  
  
  function addRoom()
  {
    rn=document.getElementById("roomName").value;
    firebase.database().ref("/").child(rn).update({
    purpose:"Adicionar Sala"  
    });
    localStorage.setItem("rn",rn);
    window.location="kwitterPage.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         roomNames = childKey;
         console.log("Nome da Sala - " + roomNames);
        row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  getData();
  
  function redirectToRoomName(name)
{
  localStorage.setItem("rn",name);
  window.location="kwitterPage.html";
}  

function logout(){
  localStorage.removeItem("un");
  localStorage.removeItem("rn");
  window.location="index.html";
  
}