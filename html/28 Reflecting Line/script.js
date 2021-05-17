const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let pointA, pointB, pointC, lineA, lineB, gameObjectA, vectorA, vectorB, vectorC;

pointA = new Point(50,50,15,"red",true,"PointA");
pointB = new Point(100,100,15,"blue",true,"PointB");
pointC = new Point(0,0,10,"yellow",false,"S");

lineA = new LinearFunction(0,0);
lineB = new LinearFunction(0,0);

vectorA = new Vector2d(0,0);
vectorB = new Vector2d(0,0);
vectorC = new Vector2d(0,0);

posY = getRandomInt(20, width-20);
posX = getRandomInt(20, height-120);
gameObjectA = new GameObject(new Vector2d(posX,posY), new Vector2d(2,2), new Vector2d(0,0));

function animate()
{
  context.clearRect(0, 0, width, height);
  requestAnimationFrame(animate);

  lineA.throughTwoPoints(pointA, pointB);
  lineB.slope = -1/lineA.slope;
  lineB.intercept = gameObjectA.pos.dy-gameObjectA.pos.dx * lineB.slope;
  lineA.draw(context);
  lineB.draw(context);

  pointC.x = lineA.intersection(lineB).x;
  pointC.y = lineA.intersection(lineB).y;

  pointA.draw(context);
  pointB.draw(context);
  pointC.draw(context);

  gameObjectA.update();
  gameObjectA.draw(context);


  vectorA.difVector(new Vector2d(gameObjectA.vel.dx, gameObjectA.vel.dy), new Vector2d(0,0));
  vectorB.difVector(new Vector2d(pointC.x,  pointC.y), new Vector2d(gameObjectA.pos.dx, gameObjectA.pos.dy));
  vectorC.difVector(new Vector2d(pointA.x - pointB.x, pointA.y - pointB.y), new Vector2d(0,0));

  vectorA.magnitude = gameObjectA.vel.magnitude;
  vectorB.magnitude = Math.sqrt( Math.pow(pointC.x - gameObjectA.pos.dx ,2) + Math.pow(pointC.y - gameObjectA.pos.dy,2));
  vectorC.magnitude = Math.sqrt( Math.pow(pointC.x - gameObjectA.pos.dx ,2) + Math.pow(pointC.y - gameObjectA.pos.dy,2));

  vectorA.draw(gameObjectA.pos.dx,gameObjectA.pos.dy,"" , 25);
  vectorB.draw(gameObjectA.pos.dx,gameObjectA.pos.dy,"", 1);
  vectorC.draw(gameObjectA.pos.dx,gameObjectA.pos.dy,"", 1);
}

animate();
