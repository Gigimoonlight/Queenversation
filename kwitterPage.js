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
  
     un=localStorage.getItem("un");
     rn=localStorage.getItem("rn");
  
  function send()
  {
    msg=document.getElementById("msg").value;
    firebase.database().ref(rn).push({
        name:un,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
  
    
  }
  
  function getData() { firebase.database().ref("/"+rn).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebaseMessageId = childKey;
           messageData = childData;

           console.log(firebaseMessageId);
             console.log(messageData);
             name = messageData['name'];
             message = messageData['message'];
           like = messageData['like'];
           nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
           messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
           like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
           spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
  
          row = nameWithTag + messageWithTag +like_button + spanWithTag;       
          document.getElementById("output").innerHTML += row;

        } });  }); }
  getData();
  
  function updateLike(messageId)
  {
    buttonId=messageId;
    likes=document.getElementById(buttonId).value;
    updatedLikes=Number(likes)+1;
    firebase.database().ref(rn).child(messageId).update({
      like:updatedLikes
    });
  }
  
  function logout() {
    localStorage.removeItem("un");
    localStorage.removeItem("rn");
    window.location.replace("index.html");
  }