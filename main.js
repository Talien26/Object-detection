var img = "";
var img2 = "";
var img3 = "";
var img4 = "";
var img5 = "";



function setup(){
    canvas = createCanvas(400, 500);
    canvas.center();
}
function preload(){
    img = loadImage("img1.jpeg");
    img2 = loadImage("img2.jpeg");
    img3 = loadImage("img3.jpeg");
    img4 = loadImage("img4.jpeg");
    img5 = loadImage("img5.jpeg");
    Objectdetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = 'Status = detecting';
}
function draw(){
    image(img, 0, 0, 402, 902);
    fill("black");
    text("Light bulb", 45, 240);
    noFill();
    stroke("black");
    rect(40, 220, 300, 250);
}
function modelloaded(){
    console.log('Model has been loaded!');
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if (error){
        console.error;
    }
    console.log(results);
}