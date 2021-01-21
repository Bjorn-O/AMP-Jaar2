const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img,numberOnARow,numberOnAColomn,sx,sy,sw,sh,x,y,w,h,index;

img = new Image();
img.src = "images/cardDeck.png"

numberOnARow = 13;
numberOnAColomn = 5;

index = Math.floor(Math.random()*52);

img.addEventListener('load', ()=>{
  sw = img.width/numberOnARow;
  sh = img.height/numberOnAColomn;
  anime();
})

function anime(){
  sx=(index%numberOnARow)*sw;
  sy = Math.floor(index/numberOnARow)*sh;
  context.drawImage(img,sx,sy,sw,sh,width/2,height/2,sw,sh)
}
