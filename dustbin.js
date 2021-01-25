class DUSTBIN{
constructor(x,y,w,h){
 var op = {
    isStatic : true,
 }

 this.body = Matter.Bodies.rectangle(x,y,w,h,op);
 World.add(world,this.body);
 this.width = w;
 this.height = h;
 
}
display(){
 var posX = this.body.position.x;
 var posY = this.body.position.y;
 var d_width = this.width;
 var d_height = this.height; 
 push();
 rectMode(CENTER);
 fill(86,86,86);
 rect(posX,posY,d_width,d_height);   
 pop();

}







}