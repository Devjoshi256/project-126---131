Lwristx = 0;
Lwristy = 0;
Rwristx = 0;
Rwristy = 0;
var harryPotter = "harry potter.mp3";
var peterPan = "peter pan.mp3";

function preload() {
    loadSound("peter pan.mp3");
    loadSound("harry potter.mp3")
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            Lwristx= results[0].pose.leftWrist.x;
            Lwristy = results[0].pose.leftWrist.y;
            Rwristx= results[0].pose.rightwrist.x;
            Rwristy = results[0].pose.rightwrist.y;
        }
}