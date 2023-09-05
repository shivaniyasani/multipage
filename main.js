function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("name of the user", user_name);
    password = document.getElementById("password").value;
    localStorage.setItem("password", password);
    window.location = "second.html"; 
}