// Referenced from https://editor.p5js.org/codingtrain/sketches/LNBpdYQHP
// CODE TRAIN 

let vid;
let playing = true;
let sourceText;
let words;
let startIndex = 0;
let asciiDiv;
function preload() {
    sourceText = loadStrings("skillsList.txt");
    // vid = loadImage("new.jpg");
  }

function setup() {
    let canvas = createCanvas(350, 350);
    canvas.parent("ascii-container")
    vid= createVideo('video.mp4')
    // noCanvas();
    words = sourceText.join(" ");

  
  vid.size(48 ,48);
  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader
  vid.position(0.0);
  textFont("Arial");
  asciiDiv = createDiv()
}

function draw() {
//   background(0);
//   frameRate(10);
let charIndex = startIndex;
let w = width / vid.width;
let h = height / vid.height;
vid.loadPixels()

let asciiImage = " "

for (let j = 0; j < vid.height; j++){
    for (let i = 0 ; i <vid.width; i++ ){
        const pixelIndex = (i + j * vid.width) * 4;
        const r = vid.pixels[pixelIndex + 0]
        const g = vid.pixels[pixelIndex + 1]
        const b = vid.pixels[pixelIndex + 2]
        const avg = (r + g + b) / 2

        noStroke()
        fill(avg)
        textSize(w * 1.2);
        textAlign(CENTER,CENTER)
        text(
            words.charAt(charIndex % words.length),
            i * w + w * 0.5,
            j * h + h * 0.5
        );
        charIndex++
    }
    // asciiImage +='<br/>'
    // startIndex++
}
asciiDiv.html(asciiImage)
}