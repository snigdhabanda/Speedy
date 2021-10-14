import Grid from "./grid"
import Player from "./player"
import Passenger from "./passenger"
import Clock from "./clock"


class Game{
    constructor(ctx, grid){

        this.grid = grid

        // const canvas = document.querySelector('canvas');
        // ctx.clearRect(0,0,canvas.width,canvas.height);
        
        this.player = this.renderPlayer(this.grid, ctx); 
        this.passenger = this.renderPassenger(this.grid, ctx)
        this.clock = this.renderClock()
        
        this.grabbedPassenger = false; 
        this.win = false;
        this.lose = false; 
        
    }


    renderPlayer(grid, ctx){
        return new Player(grid, ctx)
    }

    renderPassenger(grid, ctx){
        return new Passenger(grid, ctx)
    }

    renderClock(){
        return new Clock()
    }

    checkWin(){
        if (this.player.currPos[0] === this.passenger.startPos[0] && this.player.currPos[1] === this.passenger.startPos[1]){
           this.grabbedPassenger = true
        }
        if (this.grabbedPassenger && (this.player.currPos[0] === this.passenger.destination[0] && this.player.currPos[1] === this.passenger.destination[1])){
            // console.log(this.clock.Id)
            clearInterval(this.clock.Id)
            this.grabbedPassenger = false; 
            // console.log(this.win)
            this.win = true
        }
    }

    checkLose(){
        let x = this.player.currPos[0]
        let y = this.player.currPos[1]
        const li = document.getElementById(`${x},${y}`)
        var offMap = false; 
        if (li.className.split(" ")[1] === "hidden"){offMap = true}
        if (this.clock.timeOver || offMap){
            this.lose = true
        }
        return this.lose
    }

    
    start(ctx){
        this.player.firstRender(ctx)
        var x = this.player.currPos[0]
        var y = this.player.currPos[1]
        // console.log(x,y)
        this.player.move(ctx, x, y)
        this.clock.countTime(12)
    }

}

export default Game; 