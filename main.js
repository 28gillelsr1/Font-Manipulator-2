function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);
    video.position(50, 110)

    canvas = createCanvas(500, 375);
    canvas.position(700, 145);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)

}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);50
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function draw() {
    background('0 , 0, 255')
}
