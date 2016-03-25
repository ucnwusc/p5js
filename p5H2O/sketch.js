var was=[]; // Declare object
var fr=30;
var w=246;
var h=400;
var dia=30;
var count=5;
var flag='test';
var Osound;
var Hsound; 
function preload(){
  Osound = loadSound('au/O.ogg');
  Hsound = loadSound('au/H.ogg');
}


function setup() {
  createCanvas(w, h);
  var index = 0;
  var spx=1;
  var spy=1;
  var delta=1;
  for (index = 0; index < count ; index++) {
    x=random(w*1/4,w*3/4);
    y=random(h*1/4,h*1/4);
    theta=random(100,360);
    was[index] = new Water(x,y,dia,theta,delta,spx,spx);
  }
  frameRate(fr);
}

function draw() {
        background(50, 89, 100);
        for (index = 0; index < count ; index++) {
          was[index].move();
          was[index].sound();
          was[index].display();
        }
}
function Water(_x,_y,_dia,_theta,_delta,_spx,_spy)  {
  this.dia = _dia;
  this.diaH=this.dia*1/2;
  this.r=(this.dia+this.diaH)*1/2;
  this.x1 = this.x+this.r*cos(TWO_PI*this.theta/360);
  this.y1 = this.y+this.r*sin(TWO_PI*this.theta/360);
  this.x2=this.x+this.r*cos(TWO_PI*(this.theta+255.5)/360);
  this.y2=this.y+this.r*sin(TWO_PI*(this.theta+255.5)/360);
  this.x=_x;
  this.y=_y;
  this.theta=_theta;
  this.speedx = _spx;
  this.speedy= _spy;
  this.delta=_delta;
}
  
  Water.prototype.move = function() {
    if (this.x <= dia || this.x >= w-dia ||this.x1<=dia||this.x2<=dia||this.x1>=w-dia||this.x2>=w-dia){
        this.speedx = -1 *this.speedx;
    } 
    if (this.y<=dia || this.y >=h-dia||this.y1<=dia||this.y2<=dia||this.y1>=h-dia||this.y2>=h-dia){
      this.speedy=-1*this.speedy;
    } 
    
    this.x +=this.speedx;
    this.y +=this.speedy;
    if (this.theta>=360 || this.theta <=0){
         this.delta = -1*this.delta;
    }
    this.theta += this.delta;
    this.x1 = this.x+this.r*cos(TWO_PI*this.theta/360);
    this.y1 = this.y+this.r*sin(TWO_PI*this.theta/360);
    this.x2=this.x+this.r*cos(TWO_PI*(this.theta+252)/360);
    this.y2=this.y+this.r*sin(TWO_PI*(this.theta+252)/360);
  }

  Water.prototype.display = function() {
    noStroke();
    fill(255,0,0);
    ellipse(this.x, this.y, this.dia, this.dia);
    fill(0,255,0);
    ellipse(this.x1, this.y1, this.diaH, this.diaH);
    ellipse(this.x2, this.y2, this.diaH, this.diaH);
  }
  Water.prototype.sound= function(){
    if (dist(this.x,this.y,mouseX,mouseY)<this.dia/5){
          Osound.play();
    }
    d1=dist(this.x1,this.y1,mouseX,mouseY);
    d2=dist(this.x2,this.y2,mouseX,mouseY);
    if ((d1 < this.diaH/2)|| (d2 <this.diaH/2)){
          Hsound.play();
    }
  }
