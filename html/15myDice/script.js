const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let dice,sw,sh,roll_1,roll_2,score;

dice = {};

dice.image = new Image();
dice.image.src = "images/dice.png";

scoreList = [];
for(let i=2; i<=12;i++){
  scoreList.push(0);
}

dice.image.addEventListener('load',()=>{
  sw = dice.image.width/6;
  sh = dice.image.height;

  anime();
  setInterval(anime,500)
})

function anime(){
  context.drawImage(dice.image,(roll_1-1)*sw,0,sw,sh,200,200,sw,sh)
  context.drawImage(dice.image,(roll_2-1)*sw,0,sw,sh,200,500,sw,sh)
  roll_1 = Math.floor(Math.random()*6)+1;
  roll_2 = Math.floor(Math.random()*6)+1;
  score = roll_1 + roll_2;
  scoreList[score-2]++
  console.log(score,scoreList);
}
