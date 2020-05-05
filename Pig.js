class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.dabdabdab=255;
  }


display(){
  if(this.body.speed<3){
    super.display();
  }
  else{
    this.dabdabdab=this.dabdabdab-5;
    push();
    tint(255,this.dabdabdab);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
    World.remove(world,this.body);
  }
}
}