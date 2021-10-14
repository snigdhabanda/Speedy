import Game from "./game.js"

class View{
    constructor(ctx){

        const modal = document.querySelector(".im-a-modal");
        const header = document.querySelector(".header")
        const body = document.querySelector(".body")
        
        this.elements = [modal, header, body]

        this.load(ctx)

        

    }

    modalDisappear(){
        this.elements.forEach(ele =>{
            ele.classList.add("modal-hidden")
            ele.innerText = ""
        })
    }

    instructionsModalAppear(){
        this.elements.forEach(ele =>{
            ele.classList.remove("modal-hidden")
        })
        ele[1].innerText = "instructions"
        ele[2].body = "Speedy is making rideshare more affordable and faster, and it has just selected you as a test driver! Use the up/down/left/right keys to finish your ride before time runs out."


    }

    winModalAppear(){
        this.elements.forEach(ele =>{
            ele.classList.remove("modal-hidden")
        })
        ele[1].innerText = "Speed for the win!"
        ele[2].body = "Speedy would love to have you drive again. Press the spacebar for more challenging rides."


    }

    loseModalAppear(){
        this.elements.forEach(ele =>{
            ele.classList.remove("modal-hidden")
        })
        ele[1].innerText = "Uh-oh!"
        ele[2].body = "Your rider got upset and canceled the ride. Press the spacebar to try again. Speedy needs you!"


    }

    load(ctx){
        var beginGame = function(event){
            if (event.code === 'Space' && !started){
                const game = new Game(ctx)
                game.start(ctx)
            }
        }

        document.addEventListener('keydown', beginGame)
    }
}



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