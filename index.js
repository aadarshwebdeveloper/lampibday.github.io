console.log("hellow world");


 let a = 10;
  
  if(a>89) {
    
  document.getElementById("song").controls.play();
  console.log("succes");
  }

function changeUserName() {

  let btn = document.getElementById("btn");

  let val = document.getElementById("input").value;

  let user = document.getElementById("user");

  user.innerText = val;


  console.log("btn is clicked");
}
let first_div = document.getElementById('first');

let start_btn = document.getElementById('start');

let music = document.getElementById('music');

function start(){
  start_btn.style.display = "none";
  
  first_div.style.display = "none";
  
  music.play();
}