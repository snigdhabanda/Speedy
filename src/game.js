import Grid from "./grid"
import Player from "./player"
import Passenger from "./passenger"
import Clock from "./clock"


class Game{
    constructor(ctx){
        this.grid = this.renderGrid()
        this.player = this.renderPlayer(this.grid, ctx); 
        this.passenger = new Passenger(this.grid, ctx)
        this.clock = new Clock()
        this.grabbedPassenger = false; 
    
    }

    renderGrid(){
        const grid = document.querySelector("#grid")
        const X_DIM = grid.offsetWidth
        const Y_DIM = grid.offsetHeight
        return new Grid(X_DIM, Y_DIM); 
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
            alert("won!!")
            clearInterval(this.clock.Id)
        }
    }

    checkLose(){
        if (this.clock.timeOver()){
            alert("youlose")
        }

    }

    
    start(ctx){
        const player = this.player 
        const game = this 
        var keys = [37,38,39,40]

        this.player.firstRender(ctx)
        let x = this.player.currPos[0]
        let y = player.currPos[1]
        this.player.move(ctx, x, y)
        game.clock.countTime(20)

    }

}

export default Game; 