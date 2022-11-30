/*noiseとrandomの違いをよりわかりやすく表示したいと考えたため、
丸ではなく四角に設定し、左側に固定することでどのように伸び縮みしているかを鮮明に表示しました。
枠や色を設定することにこだわりました。
*/
var rndX = 300;
var nisX = 300;
var noiseValX = Math.random()*100;
 
function setup() {
    createCanvas(600, 600);
}
 
function draw() {
    background(200);//背景の色
    stroke(255);
    strokeWeight(4);//枠の色と太さ
    fill('#FF1493');
    rect(0, 100, rndX, 100);//randomの四角
    fill('#1E90FF');
    rect(0, 300, nisX, 100);//noiseの四角
 
    rndX += random(-4, 4);//乱数を大きくすることで客観的にみやすくしました
 
    nisX += noise(noiseValX)*4-1.85;
    noiseValX += 0.01;

    if (rndX > width) { rndX = width; }
    if (rndX < 0) { rndX = 0; }
    if (nisX > width) { nisX = width; }
    if (nisX < 0) { nisX = 0; }
}