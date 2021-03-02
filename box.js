class Box{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:1,
            density:0.04
        }
     this.body=Bodies.rectangle(x,y,70,70,options);
     this.image=loadImage("boximg.png");
     World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        rectMode(CENTER);
       
        translate(pos.x,pos.y);
        rotate (this.body.angle);
        stroke ("black")
        strokeWeight (4)
        fill (255,0,0)
        rect(0,0,70,70);

        pop();
    }
}

