function setup() {

  video = createCapture(VIDEO);
  video.size(550,500);

  canvas = createCanvas(550,550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video,modelLoaded);

  poseNet.on('pose',gotPoses);

}

function modelLoaded() {

  console.log("poseNet is initialised!");

}

function draw() {

  background('#808080');
  square(noseX,noseY,difference);
  fill("#e82cd5");
  stroke("#e82cd5");
  document.getElementById("square_sides").innerHTML = "The sides of the square will be : "+difference+"px";

}

function gotPoses(results) {
  
  if(results.length>0) {

    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose X = "+noseX+", nose y = "+noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX-rightWristX);
    console.log("right wrist x = "+rightWristX+", left wrist x = "+leftWristX+", difference = "+difference);

  }

}

var noseX = 0;
var noseY = 0;
var difference = 0;
var leftWristX = 0;
var rightWristX = 0;

