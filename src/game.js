import Grid from "./grid"
import Player from "./player"
import Passenger from "./passenger"


class Game{
    constructor(ctx){
        this.grid = this.renderGrid()
        this.player = this.renderPlayer(this.grid, ctx); 
        this.passenger = new Passenger(this.grid, ctx)
    
        // this.start(ctx);

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

    win(){
        const grabbedPassenger = true
        if (this.player.currPos === this.passenger.startPos){
            grabbedPassenger = true
        }
        if (grabbedPassenger && this.player.currPos === this.passenger.endPos){
            const done = true
        }
    }

    lose(){

    }

    
    start(ctx){
        //create player (initializes with random pos and dir & renders)
        //timer function that calls move callback from player
        //check for lose on loop 

        //render player upon key click
        //

        

        
        

    }

}

export default Game; 