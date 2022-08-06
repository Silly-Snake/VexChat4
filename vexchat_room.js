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
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    room_names = childKey;
    console.log("Room Names - " + room_names);
    row = "<div class='room_name' id="+room_names+"onclick=rrTRN(this.id)>#"+room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;

   });});};
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
};

function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "add room"
    });

    localStorage.setItem("room_name", room_name);

    window.location="vexchat_page.html";
}

function rrTRN(name){
    console.log(name);
    localStorage.setItem("room_name", room_name);
    window.location="vexchat_page";
}