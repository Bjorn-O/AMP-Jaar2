const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img_highres, img_lowres, scale, point, coordinate;

img_highres = new Image();
img_highres.src = "images/Eorzea-map-High-Res.jpg";

img_lowres = new Image();
img_lowres.src = "images/eorzea-map-low-res.jpg";

img_highres.addEventListener('load',()=>{
  setInterval(anime,10);
  scale = img_highres.width / img_lowres.width;
  coordinate = {};
  point = new Point(75,75,100,"blue",true);
})


function anime(){
  coordinate.x = point.x - point.radius;
  coordinate.y = point.y - point.radius;
  context.clearRect(0,0,width,height);

  context.drawImage(img_lowres,0,0);

  context.fillRect(coordinate.x-5,coordinate.y-5, 2*point.radius+10, 2*point.radius+10);

  context.drawImage(img_highres,coordinate.x*scale,coordinate.y*scale,200,200,coordinate.x,coordinate.y,2*point.radius,2*point.radius);
}
