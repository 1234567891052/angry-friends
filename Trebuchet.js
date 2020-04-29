class Trebuchet{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Trebuchet = Constraint.create(options);
        World.add(world, this.Trebuchet);
    }
   
    fly(){
    this.Trebuchet.bodyA = null;
    }
     
    display(){ if(this.Trebuchet.bodyA){
        var pointA = this.Trebuchet.bodyA.position;
        var pointB = this.Trebuchet.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}