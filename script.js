let stopButton1 = document.getElementById("stopButton");
let slowButton1 = document.getElementById("slowButton");
let goButton1 = document.getElementById("goButton");
let stopLight1 = document.getElementById("stopLight");
let slowLight1 = document.getElementById("slowLight");
let goLight1 = document.getElementById("goLight");

stopButton1.addEventListener("click", x => {
  goLight1.style.cssText = "background-color:none";
  slowLight1.style.cssText = "background-color:none";
  stopLight1.style.cssText = "background-color:red";
});

slowButton1.addEventListener("click", x => {
  stopLight1.style.cssText = "background-color:none";
  goLight1.style.cssText = "background-color:none";

  slowLight1.style.cssText = "background-color:orange";
});

goButton1.addEventListener("click", x => {
  stopLight1.style.cssText = "background-color:none";

  slowLight1.style.cssText = "background-color:none";

  goLight1.style.cssText = "background-color:green";
});
