var firebaseConfig = {
    apiKey: "AIzaSyDw5ih8YtTfglrukcUagug6ua4ngYsGxtE",
    authDomain: "kwitter-dee01.firebaseapp.com",
    databaseURL: "https://kwitter-dee01-default-rtdb.firebaseio.com",
    projectId: "kwitter-dee01",
    storageBucket: "kwitter-dee01.appspot.com",
    messagingSenderId: "576509435176",
    appId: "1:576509435176:web:d6f5c94309c6865d10c41d"
  };
  firebase.initializeApp(firebaseConfig) ;
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
document.getElementById("msg").value="" ;
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();