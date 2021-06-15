class Constraint{
    constructor(A,B){
        var options={
            bodyA:A,
            pointB:B,
            stiffness:0.04,
            length:20
        }
        this.body = Matter.Constraint.create(options);
        this.pointB = B
        World.add(myworld, this.body);
    }

    fly(){
        this.body.bodyA = null;
    }

    attach(abcd){
        this.body.bodyA = abcd
    }

    display(){
            if(this.body.bodyA){
                line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.pointB.x, this.pointB.y)
    }
}
}