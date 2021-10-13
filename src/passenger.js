import Player from "./player"

class Passenger extends Player{
    constructor(grid, ctx){
        super(grid, ctx); 
        this.startPos = this.getRandomPos()
        this.endPos = this.getRandomPos()
        this.destination = this.getRandomPos()
        this.renderPassenger(ctx)
        this.renderDestination(ctx)
        
        // console.log(this.startPos)
        
    }

    
    getRandomPos(){
      return super.getRandomPos.call(this)
    }

    renderPassenger(ctx){
        // console.log(this.startPos)
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