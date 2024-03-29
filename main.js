noseX=0;
noseY=0;
leftWristX=0;
rightWirstX=0;
difference=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,440);
    canvas.position(560,150);


    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses());
}

function draw(){
    background('#969A97');
    fill('#c92d22');
    stroke('#000000');
    text("Riyansh",550,160);
}

function modelLoaded(){
console.log('PoseNet is intialized!!');

}

function gotPoses(results){
    if(results.length> 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("Nose X = "+noseX+"Nose Y = "+noseY);

        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(rightWirstX-leftWristX);

        console.log("Right wrist x= "+rightWirstX+"left wrist x= "+leftWristX+"difference= "+difference);

    }
}
