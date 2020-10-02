const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let dice;

dice = {};

dice.image = new image();
dice.image.src = "images/dice.png";

dice.image.addEventListener('load',()=>{
  anime();
})

function anime(){

}
