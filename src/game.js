import Grid from "./grid"
import Player from "./player"
import Passenger from "./passenger"
import Clock from "./clock"


class Game{
    constructor(ctx, grid){

        this.grid = grid
        console.log(this.grid.layout)
        const canvas = document.querySelector('canvas');
        ctx.clearRect(0,0,canvas.width,canvas.height);
        
        this.player = this.renderPlayer(this.grid, ctx); 
        console.log(this.player.currPos)
        this.passenger = new Passenger(this.grid, ctx)
        console.log(this.passenger.startPos)
        this.clock = new Clock()
        this.grabbedPassenger = false; 
        this.win = false;
        this.lose = false; 
        
    }

    renderGrid(){
        // const grid = document.querySelector("#grid")
        // const X_DIM = grid.offsetWidth
        // const Y_DIM = grid.offsetHeight
        // const newGrid = new Grid(X_DIM, Y_DIM);
        // newGrid.placeTiles(); 
        // return grid; 
    }

    renderPlayer(grid, ctx){
        return new Player(grid, ctx)
    }

    renderPassenger(){
        return new Passenger(grid, ctx)
    }

    checkWin(){
        if (this.player.currPos[0] === this.passenger.startPos[0] && this.player.currPos[1] === this.passenger.startPos[1]){
           this.grabbedPassenger = true
        }
        if (this.grabbedPassenger && (this.player.currPos[0] === this.passenger.destination[0] && this.player.currPos[1] === this.passenger.destination[1])){
            clearInterval(this.clock.Id)
            this.win = true
            this.grabbedPassenger = false; 
        }
        return this.win
    }

    checkLose(){
        let x = this.player.currPos[0]
        let y = this.player.currPos[1]
        // || document.getElementById(`${x},${y}`).className.split(" ")[1] === "hidden"
        if (this.clock.timeOver ){
            this.lose = true
        }
        return this.lose
    }

    
    start(ctx){

        this.player.firstRender(ctx)
        let x = this.player.currPos[0]
        let y = this.player.currPos[1]
        this.player.move(ctx, x, y)
        this.clock.countTime(12)
        
        

    }

}

export default Game; 