class Box{
    constructor(x,y){
        var options={
            restitution:1,
            friction:0.2,
            density:0.1
        }
        this.visibility = 225
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.w = 40
        this.h = 40
        World.add(myworld, this.body);
    }
    display(){
        if(this.body.speed<5){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
        }
        else{
            World.remove(myworld,this.body);
            push()
            this.visibility = this.visibility-5
            tint(225,this.visibility);
            pop()
        }
    }

     scores(){
         if(this.visibility<10 && this.visibility>-10){
            score = score+1
         }
     }
}