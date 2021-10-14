
import View from "./view.js"

document.addEventListener("DOMContentLoaded", () =>{
    const canvas = document.querySelector(".player");
    const ctx = canvas.getContext('2d')
    let view = new View(ctx); 
    
})

//files
//map
    //use canvas and overlay grid 
//player 
    //constructor: initializes with random pos 
    //possible move positions 
    //update_pos([0,1])
        //check curr pos move with previous_move() 
        //if not the same movement, call turn
        // 
        //increment position in direction
        //if move direction != previous move dir
    //previous_move()
        //store
    //turn(move1, move2)
        //compare previous and current direction and turn player 
    //get previous direction
//passenger
    //constructor: initializes with random pos
                    // & random direction 
//timer
//money_bank 
//routes
//game
    //imports map, player, timer, money_bank
    //constructor: initializes all of the above
        //initializes moveable directions 
    //place_player()
    //place_passenger()
    //start()
        //add_event_listener for keyboard or mouse click
            //start timer
        //
    //move()
        //add event listener for arrrow keys
        //create conditions for each of the four arrows
        //call update_pos(selects from GAME.POS) on loop
            //moves in direction of pressed key unless another key pressed
         
    //lose()
        //timer runs out before passenger picked up
        //player drives off map 

    