class Arrow {
  constructor(sh, sw, hh, hw, color) {
    this.sh = sh;
    this.sw = sw;
    this.hh = hh;
    this.hw = hw;
    this.color = color;
  }

  draw(){
    context.beginPath();
    context.fillStyle = arrow.color;
    context.moveTo(0,0);
    context.lineTo(0,arrow.sh);
    context.lineTo(arrow.sw,arrow.sh);
    context.lineTo(arrow.sw,arrow.hh);
    context.lineTo(arrow.sw + arrow.hw ,0);
    context.lineTo(arrow.sw,-arrow.hh);
    context.lineTo(arrow.sw,-arrow.sh);
    context.closePath();
    context.stroke();
    context.fill();
  }
}
