// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var man;

function setup(){
	createCanvas(400,400);
	man = new Person();
}

function draw(){
	background(200);
	man.update();
	man.display();
  
  fill(255,0,100);
  rect(400, height-50,50,50);
}
/*var particles = [];

function setup() {
  createCanvas(640, 360);
}

function mousePressed() {
  var p = new Particle(mouseX, mouseY, random(2,4));
  particles.push(p);
}

function keyPressed() {
  if (key == ' ') {
    particles.splice(0, 1);
  }

}

function draw() {
  background(51);
  var wind = createVector(0.1, 0);

  for (var i = 0; i < particles.length; i++) {
    var gravity = createVector(0, 0.2 * particles[i].mass);
    particles[i].applyForce(gravity);

    // Wind is applied only if mouse is pressed
    if (mouseIsPressed) {
      particles[i].applyForce(wind);
    }

    particles[i].update();
    particles[i].edges();
    particles[i].display();
  }
}
*/
