img="";
status_3="";
objects=[];
function preload(){
    img=loadImage('bed room.jpg');
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status3").innerHTML="Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model is Loaded");
    status=true;
    objectDetector.detect(img, gotResult);
}
function draw(){
    image(img, 0, 0, 640, 420);
    if(status_3!=""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status3").innerHTML="Status : Object Detected";
            fill("#f8063c");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#f8063c");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}