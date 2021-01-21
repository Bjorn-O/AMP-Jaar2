const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht


let pA, pB;
//Point A, Point B
let arrow, sh, sw, hh, hw, dx, dy;
//Shaft Height, Shaft Width, Head Height, Head Width. The components to draw the arrowhead.




pA = new Point(250,250,25,"red",true,"Point A");
pB = new Point(500,500,25,"blue",true,"Point B");
arrow = new Arrow(10,200,25,50,"red");

Anime();

function Anime()
{
  dx = pB.x - pA.x;
  dy = pB.y - pA.y;

  window.requestAnimationFrame(Anime);
  context.clearRect(0,0,width,height);
  pA.draw();
  pB.draw();
  context.save();
  context.translate(pA.x,pA.y);
  context.rotate(Math.atan2(dy,dx));
  arrow.draw();
  context.restore();
}
