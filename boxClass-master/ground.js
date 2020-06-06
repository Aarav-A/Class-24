class Ground {
constructor(){
    var options ={
        isStatic:true
    }
    this.body = Bodies.rectangle(600,595,1200,5,options)
    this.width = 1200
    this.height = 5
    World.add(world,this.body)
}

display(){
    var pos = this.body.position
    rectMode(CENTER)

    rect(pos.x,pos.y,this.width,this.height)
}



















}