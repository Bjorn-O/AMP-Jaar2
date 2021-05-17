const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let pointA, pointB, pointC, lineA, lineB, gameObjectA, velVector, radVector, tanVector, radTanVector;

pointA = new Point(50,50,15,"red",true,"PointA");
pointB = new Point(100,100,15,"blue",true,"PointB");
pointC = new Point(0,0,10,"yellow",false,"S");

lineA = new LinearFunction(0,0);
lineB = new LinearFunction(0,0);

velVector = new Vector2d(0,0);
radVector = new Vector2d(0,0);
tanVector = new Vector2d(0,0);
radTanVector = new Vector2d(0,0);

posY = getRandomInt(20, width-20);
posX = getRandomInt(20, height-120);
gameObjectA = new GameObject(new Vector2d(posX,posY), new Vector2d(1,1), new Vector2d(0,0));

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


  velVector.difVector(new Vector2d(gameObjectA.vel.dx, gameObjectA.vel.dy), new Vector2d(0,0));
  radVector.difVector(new Vector2d(pointC.x,  pointC.y), new Vector2d(gameObjectA.pos.dx, gameObjectA.pos.dy));
  tanVector.difVector(new Vector2d(pointA.x - pointB.x, pointA.y - pointB.y), new Vector2d(0,0));

  velVector.magnitude = gameObjectA.vel.magnitude;
  radVector.magnitude = 1;
  radVector.magnitude = velVector.dotProduct(radVector);
  //Math.sqrt( Math.pow(pointC.x - gameObjectA.pos.dx ,2) + Math.pow(pointC.y - gameObjectA.pos.dy,2));
  tanVector.magnitude = 1;
  tanVector.magnitude = velVector.dotProduct(tanVector);
  //Math.sqrt( Math.pow(pointC.x - gameObjectA.pos.dx ,2) + Math.pow(pointC.y - gameObjectA.pos.dy,2));

  if (Math.sqrt( Math.pow(pointC.x - gameObjectA.pos.dx ,2) + Math.pow(pointC.y - gameObjectA.pos.dy,2)) < pointC.radius + gameObjectA.radius)
  {
    radVector.magnitude *= -1;

    radTanVector.sumVector(radVector,tanVector);

    gameObjectA.vel.dx = radTanVector.dx;
    gameObjectA.vel.dy = radTanVector.dy;
    console.log("Bounce!")
  }

  velVector.draw(gameObjectA.pos.dx,gameObjectA.pos.dy,"rood" , 100);
  radVector.draw(pointC.x,pointC.y,"blauw", 100);
  tanVector.draw(pointC.x,pointC.y,"groen", 100);
}

animate();
