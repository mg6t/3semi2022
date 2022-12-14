class Emitter{
  constructor(x, y, color){
    // パーティクルを放射する位置(ベクトル)
    this.position = createVector(x, y);
    // パーティクルを保管する配列
    this.particles = [];
    // 色
    this.color = color;
  }
  
  // パーティクルを追加する
  emit(num){ // 引数num: 放射したいパーティクルの数
    for(let i = 0; i < num; i++){
      this.particles.push(new Particle(this.position.x, this.position.y, this.color));// 値は決め打ちしない
      this.position.y += 0.1; // 作成するParticleのy軸方向の初期位置をだんだん下にいくようにした
    }
  }
  
  // 位置や速度を計算
  update(){
    for(let particle of this.particles){
      // 重力を実装
      let gravity = createVector(0, 0.1); // y軸方向の重力を0.2から0.1に変更
      particle.applyForce(gravity);
      
      // パーティクルの速度、位置、透明度を計算
      particle.update();
    }

    // 配列の末尾から確認していき、もし透明度が0未満なら取り除く
    for(let i = this.particles.length - 1; i >= 0; i--){
      if (this.particles[i].finished()){
        this.particles.splice(i, 1);
      }
    }
  }
  
  // 表示
  show(){
    for(let particle of this.particles){
      particle.show();
    }
  }
}