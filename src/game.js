import Grid from "./grid"
import Player from "./player"
import Passenger from "./passenger"
import Clock from "./clock"


class Game{
    constructor(ctx, grid){

        this.grid = grid.layout
        
        this.DIRS = [[0,1], [0,-1], [-1,0], [1,0]]
        this.player = this.renderPlayer(); 
        this.passenger = this.renderPassenger(ctx)
        this.clock = new Clock(); 
        
        this.grabbedPassenger = false; 
        this.win = false;
        this.lose = false; 
        
        
        
        
    }


    renderPlayer(){
        const pos = this.getRandomPos()
        const dir = this.getRandomDir()
        return new Player(pos, dir)
    }

    renderPassenger(ctx){
        const startPos = this.getRandomPos()
        const endPos = this.getRandomPos()
        return new Passenger(startPos, endPos, ctx)
    }


    checkWin(){
        if (this.player.getPosX() === this.passenger.getStartPosX() && this.player.getPosY() === this.passenger.getStartPosY()){
           this.grabbedPassenger = true
        }
        if (this.grabbedPassenger && (this.player.getPosX() === this.passenger.getEndPosX() && this.player.getPosY() === this.passenger.getEndPosY())){
            clearInterval(this.clock.Id)
            this.grabbedPassenger = false; 
            this.win = true
        }
        return this.win
    }

    checkLose(){
        console.log(this.player.getPosX(), this.player.getPosY())

        const li = document.getElementById(`${this.player.getPosX()},${this.player.getPosY()}`)
        var offMap = false; 
        if (li.className.split(" ")[1] === "hidden"){offMap = true}
        if (this.clock.timeOver || offMap){
            clearInterval(this.clock.Id)
            offMap = false; 
            this.lose = true
        }
        return this.lose
    }

    
    start(ctx){
        this.player.firstRender(ctx)
        this.player.move(ctx, this.player.getPosX(), this.player.getPosY())
        this.clock.countTime(12)
    }

    getRandomDir(){
        let rand = Math.random() * this.DIRS.length
        if (rand >= 3.5) rand = Math.floor(rand); 
        else rand = Math.round(rand);

        return this.DIRS[rand]

    }

    getRandomPos(){

        const x_pos = []
        const y_pos = []

        this.grid[0].forEach((ele)=>{
            x_pos.push(ele.getStartPos()[0])
        })

        this.grid.forEach((ele)=>{
            y_pos.push(ele[0].getStartPos()[1])
        })

        while (true){
            const x = Math.random() * x_pos.length
            const y = Math.random() * y_pos.length

            if (x >= x_pos.length - 0.5) {
                x = x_pos[Math.floor(x)]
            }
            else{
                x = x_pos[Math.round(x)]
            }

            if (y >= y_pos.length - 0.5) {
                y = y_pos[Math.floor(y)]
            }
            else{
                y = y_pos[Math.round(y)]
            }

           

            const li = document.getElementById(`${x},${y}`)

            if (li.className.split(" ")[1] !== "hidden"){
                return [x,y] 
            }
       
        }
    }

}

export default Game; 