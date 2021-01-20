const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img,numberOnARow,numberOnAColomn,sx,sy,sw,sh,x,y,w,h,index,htmlstring,cardDescription,indArticle;

var btn = document.getElementById("btn");

//index = 0;

btn.addEventListener("click", function() {
  index = Math.floor(Math.random()*64);
  var ourReqeust = new XMLHttpRequest();
  ourReqeust.open('GET', 'https://raw.githubusercontent.com/Bjorn-O/AMP-Jaar2/master/html/16myCards/Cards.json');
  // Use POST if you want to send data

  ourReqeust.onload = function(){
    var ourData = JSON.parse(ourReqeust.responseText);
    console.log(ourData[index].CardType.charAt())
    switch (ourData[index].CardType.charAt().toLowerCase()) {
      case "a":
      case "e":
      case "o":
      case "i":
      case "u":
        indArticle = "an";
        break;
      default:
        indArticle = "a";
    }
    cardDescription = "This is " + indArticle + " " +ourData[index].CardType + " called: " + ourData[index].CardName + ".";
    console.log(cardDescription);
  };
  console.log(index);
  ourReqeust.send();
});

img = new Image();
img.src = "images/deck.jpg"

numberOnARow = 10;
numberOnAColomn = 7;



img.addEventListener('load', ()=>{
  sw = img.width/numberOnARow;
  sh = img.height/numberOnAColomn;
  context.font = "20px Arial";
  // cardDescription = "This is a " +ourData[index].CardType + " called: " + ourData[index].CardName + ".";
  // context.fillText(filledDescription)
  anime();
  console.log(index+1);
})

setInterval(anime,10);

function anime(){
  context.clearRect(0,0,width,height);
  sx=(index%numberOnARow)*sw;
  sy = Math.floor(index/numberOnARow)*sh;
  context.drawImage(img,sx,sy,sw,sh,0,75,sw,sh);
  if (cardDescription) {
    context.fillText(cardDescription,0,50);
  }
}
