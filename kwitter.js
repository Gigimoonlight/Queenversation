function addUser(){
    var un=document.getElementById("userName").value;
    localStorage.setItem("un", un);
    window.location="kwitterRoom.html";
}