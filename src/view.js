import Game from "./game.js"
import Grid from "./grid.js"


class View{
    constructor(ctx){

        const modal = document.querySelector(".im-a-modal");
        const header = document.querySelector(".header")
        const body = document.querySelector(".body")
        const button = document.querySelector(".modal-button")
        this.ctx = ctx; 
        
        const grid = document.querySelector("#grid")
        const X_DIM = grid.offsetWidth
        const Y_DIM = grid.offsetHeight
        this.grid = new Grid(X_DIM, Y_DIM);
        this.grid.place_tiles()
        this.gameStarted = false 
        
        this.elements = [modal, header, body, button]
        
        this.load(ctx, this.grid)

        

    }

    modalDisappear(){
        this.elements.forEach(ele =>{
            ele.classList.add("modal-hidden")
        })
    }

    instructionsModalAppear(){
        this.elements.forEach(ele =>{
            ele.classList.remove("modal-hidden")
            
        })
        this.elements[3].classList.add("modal-button-hidden")
        this.elements[1].innerText = "instructions"
        this.elements[2].innerText = "Speedy is making rideshare more affordable and faster, and it has just selected you as a test driver! Use the up/down/left/right keys to finish your ride before time runs out. Press the space bar to start driving. And stay on the grid!"
        

    }

    winModalAppear(){
        this.elements.forEach(ele =>{
            ele.classList.remove("modal-hidden")
        })
        this.elements[1].innerText  = "speed for the win!"
        this.elements[2].innerText = "Speedy would love to have you drive again. Press the spacebar for more challenging rides."
        this.elements[3].classList.remove("modal-button-hidden")
        this.elements[3].innerText = "Level Up"
        

    }

    loseModalAppear(){
        this.elements.forEach((ele, idx) =>{
            ele.classList.remove("modal-hidden")
        })
        
        this.elements[1].innerText = "oops!"
        this.elements[2].innerText = "Your rider got upset and canceled the ride. Press the spacebar to try again. Speedy needs you!"
        
        this.elements[3].classList.remove("modal-button-hidden")
        this.elements[3].innerText = "New Game"

    }

    restart(){
        const canvas = document.querySelector('canvas');
        this.ctx.clearRect(0,0,canvas.width,canvas.height);
        this.load(this.ctx, this.grid)

    }

    afterLose(){
        const button = document.querySelector(".modal-button")
        button.addEventListener("click", () => {
            this.restart()
        })
    }

    afterWin(){
        
        const button = document.querySelector(".modal-button")
        button.addEventListener("click", () => {

            this.restart()
            
        })
    }

    load(ctx, grid){
        const view = this
        const game = new Game(ctx, grid);

        this.instructionsModalAppear(); 
        console.log(game.clock.Id)
        var beginGame = function(event){
            if (event.code === 'Space' && !view.gameStarted){
                view.gameStarted = true; 
                view.modalDisappear()
                game.start(ctx)
                

            }
            else if (view.gameStarted && [37,38,39,40].includes(event.keyCode)){
                game.checkWin()
                console.log(game.player.currPos)
                
                if (game.win){
                    view.gameStarted = false 
                    game.win = false; 
                    clearInterval(id)
                    view.winModalAppear();
                    view.afterWin()
                }
            }
        }

        function checkforLose(){
           
            if (game.checkLose()){
            
                clearInterval(id)
                view.loseModalAppear();
                view.afterLose()
                view.gameStarted = false 
                game.lose = false; 
                return;  
            }

        }
        document.addEventListener('keydown', beginGame)
        var id = setInterval(checkforLose, 1000)
        

    }
}


export default View; 