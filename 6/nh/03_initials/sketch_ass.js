//Drawing the initials 'TB'

function setup(){
    createCanvas(300,300);
    background(0);
    smooth();
    stroke(255);
    strokeWeight(4);
 
    //H　縦線2本
    line(width/4-50, 80, width/4-50, 230);
    line(width/4+30, 80, width/4+30, 230);

    //H　中央の横線
    noStroke();
    arc(width/4-10, 150, 80, 80, PI, TWO_PI, OPEN);
    stroke(255);
    line(width/4-50, 160, width/4+30, 160);

    //N 縦線
    line(width*3/4-70, 80, width*3/4-70, 230);

    //N 斜め線
    line(width*3/4-70, 80, width*3/4, 230);

    //N 半円
    noStroke();
    arc(3*width/4, 155, 80, 150, -1*HALF_PI, HALF_PI, OPEN);
  }