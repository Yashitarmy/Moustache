moustacheX= 0
moustacheY= 0
function preload() {
moustache_img = loadImage("mus.png")
}

 function setup() {
canvas= createCanvas(300,300)
canvas.center()
video= createCapture(VIDEO)
video.hide()
video.size(300, 300)
posenet= ml5.poseNet(video, modelLoaded)
posenet.on("pose", gotResults)
 }

 function draw() {
 image(video, 0,0, 300, 300)
 fill("red")
 stroke("black")
 image(moustache_img,moustacheX - 50, moustacheY - 50, 100 , 100)
 }
 function TakePhoto() {
    save("selfie.jpeg")
 }
 function modelLoaded() {
   console.log("Model Loaded successfully")
 }

 function gotResults(results) {
   if(results.length> 0) {
moustacheX= results[0].pose.nose.x
moustacheY= results[0].pose.nose.y
console.log("moustache X value is" + moustacheX)
console.log("moustache Y value is" + moustacheY)
   }
 }

 




















