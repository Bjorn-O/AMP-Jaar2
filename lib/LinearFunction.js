class LinearFunction {
  constructor(slope,intercept) {
    this.slope = slope;
    this.intercept = intercept;
  }

  y(x) {
    return x*this.slope + this.intercept;
  }

  intersection(line){
    //line.slope line.intercept
    let ans = {};
    ans.x = (line.intercept - this.intercept)/(this.slope - line.slope);
    ans.y = this.y(ans.x);
    return ans
  }
  throughTwoPoints(A,B)
  {
    let dx = B.x - A.x;
    let dy = B.y - A.y;

    this.slope = dy/dx;
    this.intercept = A.y - this.slope * A.x;
  }

  draw(context,color){
    context.strokeStyle = color || "black";
    context.moveTo(0,this.y(0));
    context.lineTo(canvas.width,this.y(canvas.width));
    context.stroke();
  }
}
