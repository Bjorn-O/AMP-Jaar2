const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace
let img = new Image();
let img2 = new Image();
img.src = "images/cog.png";
img2.src = "images/cog.png";
angle = 0.1;
angle2 = 0.1;

img.addEventListener('load',()=>{
 setInterval(anime,10)
})

img2.addEventListener('load',()=>{
  setInterval(anime2,10)
})

function anime(){
  context.clearRect(0,0,width,height);
  context.save();
  context.translate(675,575);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300)
  context.restore();
  angle -= 0.01;

  context.save();
  context.translate(825,725);
  context.rotate(1);
  context.rotate(-angle*3);
  context.drawImage(img,-75,-75,150,150);
  context.restore();

  context.save();
  context.translate(725,625);
  context.rotate(1);
  context.rotate(-angle*0.2);
  context.drawImage(img,-375,-375,750,750);
  context.restore();
}
