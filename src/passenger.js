
class Passenger{
    constructor(startPos, endPos, ctx){
        
        this.startPos = startPos
        this.destination = endPos
        this.renderPassenger(ctx)
        this.renderDestination(ctx)
       
        
    }

    getStartPosX(){
        return this.startPos[0] 
    }

    getStartPosY(){
        return this.startPos[1] 
    }

    getEndPosX(){
        return this.destination[0] 
    }

    getEndPosY(){
        return this.destination[1] 
    }

    renderPassenger(ctx){
        ctx.fillStyle = '#f56f42';
        ctx.beginPath();
        ctx.arc(this.startPos[0]+15, this.startPos[1] + 8, 4, 0, 2 * Math.PI, false);
        ctx.stroke(); 
        ctx.fill(); 

        ctx.fillStyle = 'purple';
        ctx.beginPath();
        ctx.arc(this.startPos[0]+15, this.startPos[1] + 19, 6, 0, Math.PI, true);
        ctx.stroke(); 
        ctx.fill();
        
    }

    renderDestination(ctx){
        ctx.beginPath()
        ctx.fillStyle = "white"
        ctx.fillRect(this.destination[0] + 11, this.destination[1], 10, 20)
        ctx.strokeRect(this.destination[0] + 11, this.destination[1], 10, 20)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.fillRect(this.destination[0] + 13, this.destination[1] + 8, 6, 12)
        ctx.fill()
    }

}


export default Passenger; 