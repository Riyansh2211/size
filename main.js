function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,440);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#969A97');
}

function modelLoaded(){
console.log('PoseNet is intialized!!');

}

function gotPoses(results){
    if(results > 0){
        console.log(results);
    }
}