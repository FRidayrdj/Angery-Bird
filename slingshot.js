class Slingshot 
{
    constructor (body1,pointB)
    {
        var option = 
        {
            bodyA :body1,
            pointB :pointB,
            stiffness:0.08,
            length:10,
        }
        this.pointB = pointB;
        this.sling = Constraint.create(option);
        World.add(world,this.sling)

    }
    display() 
    {
        if (this.sling.bodyA)
        {
        strokeWeight (4);
    line ( this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }

fly()
{
    this.sling.bodyA=null;
}    

}


