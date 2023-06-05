class Box{
    constructor(x, y, w, h){
        this.body = Bodies.rectangle(x, y, w, h);
        World.add(world, this.body);
        this.w = w;
        this.h = h;
    }
    show(){
        const pos = this.body.position;
        const angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(255, 255, 255, 0);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }

}