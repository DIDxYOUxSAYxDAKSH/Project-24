class TABLE {
    constructor(x,y,width,height) {
      var op = {
      isStatic: true,
      }
      this.body = Bodies.rectangle(x,y,width,height,op);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var posX =this.body.position.x;
      var posY =this.body.position.y;
      push();
      rectMode(CENTER);
      fill(98,41,14);
      rect(posX, posY, this.width, this.height);
      pop();
    }
  }