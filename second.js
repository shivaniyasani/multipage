// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtcfWOuM1JDeJi2lwmlCd1HgOedpEbBRo",
  authDomain: "multiwebsite-2f3e5.firebaseapp.com",
  databaseURL: "https://multiwebsite-2f3e5-default-rtdb.firebaseio.com",
  projectId: "multiwebsite-2f3e5",
  storageBucket: "multiwebsite-2f3e5.appspot.com",
  messagingSenderId: "623271914212",
  appId: "1:623271914212:web:a13e6a802abe452ee21af1",
  measurementId: "G-VZCZC9600R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("name of the user");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "third.html";
           
}