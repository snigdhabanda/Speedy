import Grid from "./grid"
import Player from "./player"
import Passenger from "./passenger"


class Game{
    constructor(ctx){
        this.grid = this.renderGrid()
        this.player = this.renderPlayer(this.grid, ctx); 
        this.passenger = new Passenger(this.grid, ctx)

        this.grabbedPassenger = false; 
    
        this.start(ctx);

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

    checkWin(grabbedPassenger){
        
        if (this.player.currPos[0] == this.passenger.startPos[0] && this.player.currPos[1] === this.passenger.startPos[1]){
            // alert("hello")
            var grabbedPassenger = true
            console.log(grabbedPassenger)
            
        }
        if (grabbedPassenger && (this.player.currPos[0] === this.passenger.endPos[0] && this.player.currPos[1] === this.passenger.endPos[1])){
            alert("hello")
        }
    }

    checkLose(){

    }

    
    start(ctx){

        const player = this.player 
        const game = this 
        var started = false; 
        var keys = [37,38,39,40]

        var beginGame = function(event){
            if (event.code === 'Space' && !started){
                player.firstRender(ctx)
                let x = player.currPos[0]
                let y = player.currPos[1]
                player.move(ctx, x, y)
                started = true;   
            }
            else if (keys.includes(event.keyCode)) {
                game.checkWin()
            }
      
        }


       document.addEventListener('keydown', beginGame)
    }

}

export default Game; 