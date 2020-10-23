const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let clockFace, hourHand, minuteHand, secondHand, time;
let seconds, minutes, hours;

clockFace = new Image();
clockFace.src = "images/clock-face.png";

hourHand = new Image();
hourHand.src = "images/hour-hand.png";

minuteHand = new Image();
minuteHand.src = "images/minute-hand.png";

secondHand = new Image();
secondHand.src = "images/second-hand.png";
//secondHand.width = secondHand.width/2;
//secondHand.length = secondHand.lenth/2;

setInterval(anime,1);

function anime(){
  time = new Date();
  seconds = time.getSeconds();
  minutes = time.getMinutes() *60 + seconds;
  hours = time.getHours() * 3600 + minutes;

  context.clearRect(0,0,width,height);
  context.drawImage(clockFace,0,0);

  context.save();
  context.translate(clockFace.width/2,clockFace.height/2);
  context.rotate(seconds*2*Math.PI/60);
  context.drawImage(secondHand,-secondHand.width/2,-secondHand.height*0.947265625);
  context.restore();

  context.save();
  context.translate(clockFace.width/2,clockFace.height/2);
  context.rotate(minutes*2*Math.PI/3600);
  context.drawImage(minuteHand,-minuteHand.width/2,-minuteHand.height*0.947265625);
  context.restore();

  context.save();
  context.translate(clockFace.width/2,clockFace.height/2);
  context.rotate(hours*2*Math.PI/43200);
  context.drawImage(hourHand,-hourHand.width/2,-hourHand.height*0.947265625);
  context.restore();
  console.log(hours);
  console.log(seconds );
}
