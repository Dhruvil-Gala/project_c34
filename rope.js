class Rope{
    constructor(bodyA,pointb){
        var options={
            bodyA:bodyA,
            pointB:pointb,
            stiffness:0.05,
            length:20,

        }
        this.constraint=Matter.Constraint.create(options)
        World.add(world,this.constraint);
    }
    display(){
if(this.constraint.bodyA)(
        line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,   this.constraint.pointB.x  ,this.constraint.pointB.y)
)
    }
    fly(){
        this.constraint.bodyA = null;
    }
}