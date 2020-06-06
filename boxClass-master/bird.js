class Bird {
    constructor(x, y, height) {
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, height, options);
      this.width = 50;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY
      rectMode(CENTER);
      push();
      translate(pos.x,pos.y);
      fill("Red");
      rect(0,0,this.width, this.height);
      pop();
    }
  };
  