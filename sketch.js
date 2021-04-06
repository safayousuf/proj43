var hr, mn, sc;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  secondAngle = map(sc-15,0,60,0,360);
  hourAngle = map(hr-3,0,12,0,360);
  minuteAngle = map(mn-15,0,60,0,360);

  noFill();
  strokeWeight(10);
  stroke("red");
  arc(200,200,380,380,990,secondAngle);
  stroke(80,250,30);
  arc(200,200,355,355,990,minuteAngle);
  stroke("blue");
  arc(200,200,330,330,990,hourAngle);
  
  push();
  translate(200,200);
  rotate(secondAngle);
  stroke("red");
  strokeWeight(10);
  line(0,0,150,0);
  pop();

  push();
  translate(200,200);
  rotate(minuteAngle);
  stroke(80,250,30);
  strokeWeight(10);
  line(0,0,100,0);
  pop();

  push();
  translate(200,200);
  rotate(hourAngle);
  stroke("blue");
 strokeWeight(10)
 line(0,0,50,0)
 pop();
  
}