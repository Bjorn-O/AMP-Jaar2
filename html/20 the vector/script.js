const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let pointA

pointA = new Point(100,250,20,"red",true,"PointA");

function animate(){
  context.clearRect(0,0,width,height)
  pointA.draw(context)
}

setInterval(animate,10);
