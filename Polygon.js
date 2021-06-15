class Polygon{
    constructor(x,y,w,h){

        var options={
            density:0.1
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.polygoni = loadImage("polygon.png");
        World.add(myworld, this.body);
        
    }
    display(){
        imageMode(CENTER);
        image(this.polygoni ,this.body.position.x, this.body.position.y, this.w, this.h);
    }
}