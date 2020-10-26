const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img,numberOnARow,numberOnAColomn,sx,sy,sw,sh,x,y,w,h,index,htmlstring;

var cardDescription = document.getElementById('animal-info');
var btn = document.getElementById("btn");

img = new Image();
img.src = "images/deck.jpg"

numberOnARow = 10;
numberOnAColomn = 7;


btn.addEventListener("click", function() {
  index = Math.floor(Math.random()*64);
  var ourReqeust = new XMLHttpRequest();
  ourReqeust.open('GET', 'Cards.json');
  // Use POST if you want to send data

  ourReqeust.onload = function(){
    var ourData = JSON.parse(ourReqeust.responseText);
    renderHTML(ourData);
  };
  ourReqeust.send();
});

img.addEventListener('load', ()=>{
  sw = img.width/numberOnARow;
  sh = img.height/numberOnAColomn;
  anime();
  console.log(index);
})

function renderHTML(data)
{
  var htmlString = "";

  htmlString = "<p>" + "This is a " + data[index].CardType + " named: " + data[index].CardName + ".";

  cardDescription.insertAdjacentHTML('beforeend', htmlString);
}


function anime(){
  sx=(index%numberOnARow)*sw;
  sy = Math.floor(index/numberOnARow)*sh;
  context.drawImage(img,sx,sy,sw,sh,sw*2.5,0,sw,sh)
}
