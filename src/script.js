function setup (){
  pixelDensity(1);
  createCanvas();
  colorMode(HSB, 1, 1, 1);
  rectMode(CENTER);
  windowResized();
}

function draw(){
  background(0, .3);
  translate(width/2, height/2);
  scale(min(height/400, width/400));
  rotate(frameCount/300);
  stroke(1, .1);
  noFill();
  
  push();
  blendMode(ADD);
  
  let osc1 = sin(frameCount/200)*.5 + .5;
  let osc2 = sin(frameCount/317)*.5 + .5;
  let amp = 5 + osc1*10;
  
  let baseHue = frameCount/1000;
  let hueRange = osc1*.5 + .1;
  
  let n = 300;
  for (let i = 0; i < n; i++){
    push();
    let amt = i/n;
    stroke((baseHue + amt*hueRange)%1, 1, 1, .1);
    rotate(sin((i/amp - frameCount/100)));
    let s = i+10;
    rect(0, 0, s, s*(1-amt*osc2));
    pop();
  }
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}