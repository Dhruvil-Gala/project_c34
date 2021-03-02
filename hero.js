
       
class Hero{
  constructor(x,y){
       var options={
        density:1,
        isStatic:false,
        frictionAir:0.005
      }

   this.body=Bodies.rectangle(x,y,230,150,options);
   this.image=loadImage("Superhero-01.png");
   World.add(world,this.body);
  }
  display(){
      var pos=this.body.position
      push();
      imageMode(CENTER);
   
      translate(pos.x,pos.y);
      rotate (this.body.angle);
     
      fill (255)
      image(this.image,0,0,230,150);

      pop();
  }
}