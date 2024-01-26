const backgroundSound = new Audio("./backgroundsound.mp3");
backgroundSound.play()
backgroundSound.loop = true;


function saveData() {
  var userName = document.getElementById("userNameInput").value;
  var nickName = document.getElementById("nickNameInput").value;
  localStorage.setItem("userName", userName);
  localStorage.setItem("nickName", nickName);
}



