// const reports = [
//     "Flawless 😎",
//     "Nice 😋",
//     "Incredible 🫡",
//     "Spectacular 🥳"

// ]

// nickname=localStorage.getItem("nickName")



var messages = [
  "Great job!",
  "Well done!",
  "Awesome!",
  "Keep it up!",
];

nickname = localStorage.getItem("nickName")

var randomMessage = messages[Math.floor(Math.random() * messages.length)];

// Display the selected message
document.querySelector('.statement').textContent = randomMessage;

document.querySelector('.statement').textContent += " " + nickname;