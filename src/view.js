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
        // console.log(this.elements)

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
        this.elements[2].innerText = "Speedy is making rideshare more affordable and faster, and it has just selected you as a test driver! Use the up/down/left/right keys to finish your ride before time runs out. Press the space bar to start driving."
        

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
        console.log("hello")
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
        this.gameStarted = false 
        
        // debugger
        this.load(this.ctx, this.grid)


    }

    afterLose(){
        const button = document.querySelector(".modal-button")
        console.log("hello")
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
        console.log(this.grid)
        const game = new Game(ctx, grid);
        const count = 0
        this.instructionsModalAppear(); 

        var beginGame = function(event){
            if (event.code === 'Space' && !view.gameStarted){
                view.gameStarted = true; 
                console.log(true)
                view.modalDisappear()
                game.start(ctx)

            }
            else if (view.gameStarted && [37,38,39,40].includes(event.keyCode)){
                console.log(game.passenger.startPos)
                console.log("pressed")
                if (game.checkWin()){
                    clearInterval(id)
                    view.winModalAppear();
                    view.afterWin()
                }
            }
        }

        function checkforLose(){
            if (game.checkLose()){
                console.log(id)
                clearInterval(id)
                view.loseModalAppear();
                view.afterLose() 
            }

        }
        document.addEventListener('keydown', beginGame)
        var id = setInterval(checkforLose, 1000)

    }
}

//fix spacing on winmodal
//losemodal --> create button for new game
//newGame (function restart, this calls game again)


//game: levelup function; restart --> load, with counter, counter triggers; passes in reduced time to clock
//once count hits 2 (after 3 levels) ==> create array of random colors; randomly pick 2 colors to render passenger with; pass these into the house
//call render passenger more than once
//increase time on clock
//levels 4,5,6

//hide tiles 
//keyanimationframes 
//disable scroll functionality
//disable play functionality on modals 
//add buttons to modals
//make tiles different color after traversing; toggle between 2 colors 
//add level
//add sound
//add instructions button 
//add message about rendering to full screen
//fix movement problem
//fix multiple cars rendering after 2 loses 
//rerender car
//by 10pm

//start bfs
//do dfs 


//first page load:
//load game, instructions modal 
//click space bar ==> game begins
//modal bg transparent, no box shadow, divs transparent, no borders, remove text

//view checks game status

//lose:
//if time runs out
//display lose instructions
//click space bar ==> new game 

//win:
//game.won = true
//display win instructions
//increment level counter
//pass counter into game
//game changes conditions (1), reduced time, 2) reduced time, roadblock, more passengers


export default View; 