// Referenced from https://editor.p5js.org/codingtrain/sketches/LNBpdYQHP
// CODE TRAIN 

let img;
let sourceText;
let words;
let startIndex = 0;


function preload() {
    img = loadImage("rocco.jpg")
    sourceText = loadStrings("skillsList.txt");
}

function setup() {
    let canvas = createCanvas(350, 350);
    canvas.parent("ascii-container")
    words = sourceText.join(" ");
    textFont("Arial");
}

function draw() {
    frameRate(10);
    // background(0)
    let charIndex = startIndex;
    let w = width / img.width;
    let h = height / img.height;

    img.loadPixels()
    
    for (let j = 0; j < img.height; j++){
        for (let i = 0 ; i <img.width; i++ ){
            const pixelIndex = (i + j * img.width) * 4;
            const r = img.pixels[pixelIndex + 0] 
            const g = img.pixels[pixelIndex + 1]
            const b = img.pixels[pixelIndex + 2]
            let avg = (r + g + b) / 2
            noStroke()
            fill(avg)
            textSize(w * 2.5)
            textAlign(CENTER,CENTER)
            text(
                words.charAt(charIndex % words.length),
                i * w + w * 0.5,
                j * h + h * 0.5
                );
                charIndex++
            }
        }
        startIndex++
}
