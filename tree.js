class Tree{
    constructor(x,y){

        this.body = Bodies.rectangle(x, y);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/tree.png");
        World.add(World, this.body);

    }
    
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
   
}