const firebaseConfig = {
    apiKey: "AIzaSyCNMvZ1fGqfI2u-v_LJ7vERFNM3QhRF7Yc",
    authDomain: "vex-chat-6a8bc.firebaseapp.com",
    databaseURL: "https://vex-chat-6a8bc-default-rtdb.firebaseio.com",
    projectId: "vex-chat-6a8bc",
    storageBucket: "vex-chat-6a8bc.appspot.com",
    messagingSenderId: "9427892652",
    appId: "1:9427892652:web:df35e9296e95c7d71ea209",
    measurementId: "G-ZFD1MQEL97"
};

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

 } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
};
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        message:msg,
        name:user_name,
        like:0
    });
    document.getElementById("msg").value="";
};