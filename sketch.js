video = "";
inputTextbox = "";
cocossdStatus = "notActive";
function preload() {
  
}

function setup() {
  canvas = createCanvas(497, 398);
  video = createCapture(VIDEO);
  video.hide();
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById('status').innerHTML = "Status: Detecting Objects";
  inputTextbox = document.getElementById('input').value;
}

function modelLoaded() {
  console.log("Model Loaded!");
  cocossdStatus = "Active";
}

function draw() {
  canvas.center();
  image(video, 0, 0, 497, 398);
}
