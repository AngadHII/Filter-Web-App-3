noseX = 0;
noseY = 0;

 function preload(){
    img = loadImage("https://i.postimg.cc/FHJkFw84/Moustache-Transparent-Images.png");
 }

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet = ml5.poseNet( video, modelLoaded );
poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,500,500);
    image(img,noseX,noseY,120,120);
}

function take_snapshot(){
    save("Your_Moustache_Selfie.png");
   
}


function modelLoaded(){
    console.log('The poseNet has been initialised.');
}

function gotPoses(results){
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 50;
        noseY = results[0].pose.nose.y - 25;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}

