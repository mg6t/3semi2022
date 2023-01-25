// データの可聴化
// センサーや API によって公開されたものなど、リアルタイムのインターネットデータストリームを見つけます (気象、株価、衛星の位置、ツイート、地震イベントの監視)。
// このデータを音響化するプログラム、またはそれを使用してジェネレーティブコンポジションの音楽パラメーターを制御するプログラムを作成します。

// 例題では、音量が緯度latitude、周波数が経度longitudeとなっていた
// 今回は、天気予報apiを用いて、音量を風量に、周波数を降水確率にした(降水確率が高いほど、音を高く)

var osc;
var wave;

var drawWaveLastTime;
var drawWaveInterval;
var curWave;

var offset;

var isOn;

// var lati = 0;
// var longi = 0;

var forecasts = "";

// var url = 'http://api.open-notify.org/iss-now.json';
var url = 'https://weather.tsukumijima.net/api/forecast/city/130010';

var myFont;

var ready;

var count = 0; // drαwを実行した回数


function setup() {
  createCanvas(800, 800);
  
  loadJSON(url, gotData); // jsonデータを読み込んだ後、gotDataメソッドを動かす

  ready = false;
  
  textFont("Helvetica-Bold", 50);
  
  //create a synth and connect it to the master output (your speakers)
  osc = new Tone.Oscillator({ // 波形を作る
      type: "sine", // 波の種類
      frequency: 440, // 周波数
      volume: -8
  }).toDestination();
  
  wave = new Tone.Waveform();
  osc.connect(wave); // オシレータと出力をつなぐ
  
  drawWaveInterval = 100;
  drawWaveLastTime = -1000;
  
  offset = 100;
  
  osc.start(); // スタート
  isOn = true;
  
  frameRate(1); // フレームレートは遅め
}

function draw() {
  background(253);

  // テキストの設定
  textAlign(CENTER, TOP);
  noStroke();
  fill(0);
  textAlign(LEFT, CENTER);

  // osc.volume.value = constrain(map(lati, -90, 90, -32, 4), -32, 4); // 出力のボリューム -90~90のlatiを-32から4にして、最小-32、最大4にする
  // osc.frequency.value = constrain(map(longi, -180, 80, 200, 600), 200, 600); // 周波数 -180から80のlongiを200から600にして、最小200、最大600にする
  let today_forecast = forecasts[0]; // 本日の天気
  let tommorow_forecast = forecasts[1]; // 明日の天気

  // 音量
  let today_wave = today_forecast.detail.wave; // 本日の風量(メートル入り）
  let fix_today_wave = today_wave.substr(0, today_wave.indexOf('メ')); // 本日の風量(数字のみ）
  let tommorow_wave = tommorow_forecast.detail.wave; // 明日の風量(メートル入り)
  let fix_tommorow_wave = tommorow_wave.substr(0, tommorow_wave.indexOf('メ')); // 明日の風量(数字のみ)
  
  if(fix_today_wave == "０．５" && fix_tommorow_wave == "０．５"){ // parseFloatするとNanになってしまうため、分岐
    fix_today_wave = 0.5;
    fix_tommorow_wave = 0.5;
  }else if(fix_today_wave == "０．５"){
    fix_today_wave = 0.5;
    fix_tommorow_wave = parseFloat(hankaku2Zenkaku(fix_tommorow_wave));
  }else if(fix_tommorow_wave == "０．５"){
    fix_today_wave = parseFloat(hankaku2Zenkaku(fix_today_wave));
    fix_tommorow_wave = 0.5;
  }else{
    fix_today_wave = parseFloat(hankaku2Zenkaku(fix_today_wave));
    fix_tommorow_wave = parseFloat(hankaku2Zenkaku(fix_tommorow_wave));
  }

  // 周波数
  let today_chanceOfRain = today_forecast.chanceOfRain; // 本日の降水確率
  let tommorow_chanceOfRain = tommorow_forecast.chanceOfRain; // 明日の降水確率


  if (count < 4){ // 今日の天気予報を可聴化
    osc.volume.value = map(fix_today_wave, 0, 3, -32, 4); // 出力のボリューム 0~3の風量を-32から4にして、最小-32、最大4にする
    text("今日の風量: " + str(fix_today_wave) + "メートル", 80, 250);

    let today_rain = 0;
    let fix_today_rain = 0;
    if (count == 0){ // 0~6時の降水確率
      today_rain = today_chanceOfRain["T00_06"];
      text("今日の降水確率(0~6時): " + str(today_rain), 80, 300);
    }else if(count == 1){ // 6~12時の降水確率
      today_rain = today_chanceOfRain["T06_12"];
      text("今日の降水確率(6~12時): " + str(today_rain), 80, 300);
    }else if(count == 2){ // 12~18時の降水確率
      today_rain = today_chanceOfRain["T12_18"];
      text("今日の降水確率(12~18時): " + str(today_rain), 80, 300);
    }else{ // 18~24時の降水確率
      today_rain = today_chanceOfRain["T18_24"];
      text("今日の降水確率(18~24時): " + str(today_rain), 80, 300);
    }
    fix_today_rain = today_rain.substr(0, today_rain.indexOf('%'));
    console.log(fix_today_rain);

    if (fix_today_rain != "--"){ // データが取れなかったとき
      fix_today_rain = parseFloat(fix_today_rain);
      osc.frequency.value = constrain(map(fix_today_rain, 0, 100, 200, 600), 200, 600); // 周波数 -180から80のlongiを200から600にして、最小200、最大600にする
    }else{
      osc.frequency.value = 442;
    }
  }else { // 明日の天気予報を可聴化
    osc.volume.value = map(fix_tommorow_wave, 0, 3, -32, 4); // 出力のボリューム 0~3の風量を-32から4にして、最小-32、最大4にする
    text("明日の風量: " + str(fix_tommorow_wave) + "メートル", 80, 250);

    let today_rain = 0;
    let fix_tommorow_rain = 0;
    if (count == 0){ // 0~6時の降水確率
      today_rain = tommorow_chanceOfRain["T00_06"];
      text("今日の降水確率(0~6時): " + str(today_rain), 80, 300);
    }else if(count == 1){ // 6~12時の降水確率
      today_rain = tommorow_chanceOfRain["T06_12"];
      text("今日の降水確率(6~12時): " + str(today_rain), 80, 300);
    }else if(count == 2){ // 12~18時の降水確率
      today_rain = tommorow_chanceOfRain["T12_18"];
      text("今日の降水確率(12~18時): " + str(today_rain), 80, 300);
    }else{ // 18~24時の降水確率
      today_rain = tommorow_chanceOfRain["T18_24"];
      text("今日の降水確率(18~24時): " + str(today_rain), 80, 300);
    }
    fix_tommorow_rain = today_rain.substr(0, today_rain.indexOf('%'));

    if (fix_tommorow_rain != "--"){
      fix_today_rain = parseFloat(fix_tommorow_rain);
      osc.frequency.value = constrain(map(fix_tommorow_rain, 0, 100, 200, 600), 200, 600); // 周波数 -180から80のlongiを200から600にして、最小200、最大600にする
    }else{
      osc.frequency.value = 442;
    }
  }
  // text("Latitude: " + str(lati) + "\n" + "Longitude: " + str(longi), 80, 250);

  
  // draw wave form
  if (millis() - drawWaveLastTime > drawWaveInterval) { // 起動してからのミリ秒 - (-1000) > 100
    drawWaveLastTime = millis(); // 起動してからのミリ秒
    curWave = wave.getValue(); // 現在時刻の波形(配列)
  }
  
  var len = curWave.length; // 配列の要素数
  noFill();
  stroke(0);
  strokeWeight(8);

  beginShape(); // 複雑な形状を作る　スタート
  for (var i = 0; i < len; i++) {
    var x = map(i, 0, len, 0, width); // iを0~lenから0~widthへ
    var y = map(curWave[i], -0.5, 0.5, 0, 1100); // curWave[i]を-0.5~0.5から0~1100へ
    vertex(x, y); // 頂点を指定
  }
  endShape(); // 複雑な形状を作る 終わり

  if(count == 7){
    count = 0;
  }else{
    count = count + 1;
  }
}

// 読み込んだデータから、必要なデータを取り出す
function gotData(data) {
  /*
  var iss = data.iss_position;
  longi = iss.longitude;
  lati = iss.latitude;
  */ 

  forecasts = data.forecasts; // 天気の情報のみ取り出す
}

// マウスが押された時の処理
function mousePressed() {
  if (!ready) {
    Tone.start(); // オーディオを再生
    console.log("Audio ready");
    ready = true;
  }
  
  if (isOn) {
    osc.stop(); // 停止する
    isOn = false;
  } else {
    osc.start(); // スタート
    isOn = true;
  }
}

// キーが押されたら、現在のキャンバスを画像として保存
function keyPressed(){
  saveCanvas('data_sonification', 'png');
}

// 全角から半角へ　 https://www.yoheim.net/blog.php?q=20191101
function hankaku2Zenkaku(str) {
  return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
}
