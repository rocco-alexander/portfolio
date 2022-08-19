// Referenced from https://editor.p5js.org/codingtrain/sketches/LNBpdYQHP
// CODE TRAIN 

let vid;
let sourceText;
let words;
let startIndex = 0;


function preload() {
    vid = loadImage("rocco.jpg")
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
    let charIndex = startIndex;
    let w = width / vid.width;
    let h = height / vid.height;

    vid.loadPixels()
    
    for (let j = 0; j < vid.height; j++){
        for (let i = 0 ; i <vid.width; i++ ){
            const pixelIndex = (i + j * vid.width) * 4;
            const r = vid.pixels[pixelIndex + 0] 
            const g = vid.pixels[pixelIndex + 1]
            const b = vid.pixels[pixelIndex + 2]
            let avg = (r + g + b) / 2
            noStroke()
            fill(avg)
            textSize(w * 3)
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
