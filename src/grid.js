// const { create } = require("core-js/core/object");
import Tile from "./tile"

class Grid{
    constructor(X_DIM, Y_DIM){
        //grid dimensions are same as the map
        this.width = X_DIM
        this.height = Y_DIM
        
        this.layout = [] //2D array to hold all tiles in the grid  
        // this.place_tiles()
    }


    place_tiles(){
        //creating 2D grid of tiles 

        //dims of each tile 
        const X_DIM = 30;
        const Y_DIM = 20; 

        const ul = document.querySelector("#grid")
        
        for (let i = 0; i < this.height; i += Y_DIM){
            let tile_row = [];
            for (let j = 0; j < this.width - X_DIM; j += X_DIM){
                const tile = new Tile(j, i)      
                tile_row.push(tile)

                
                const li = document.createElement("LI")
                li.classList.add("tile")
                li.setAttribute("id", j + "," + i)
                ul.appendChild(li); 

                if ((j <= 180 && i<= 140) || (j <= 90 && i <= 560) || (j <= 120 && i >= 440) || (i <= 40 && j <= 720) || (i <= 360 && j >= 660) || (i >= 500 && j >= 660) || (j >= 600 && i <= 80) || (j >= 600 && i <= 120) || (i === 420 && j >= 690) || (i <= 420 && j >= 720) || (j >= 690 && i === 440) || (j <= 220 && i <= 150)){
                    this.hide_tiles(li)
                }
               
            }
            this.layout.push(tile_row)
            
            
        } 
        
    }

    hide_tiles(li){
        //non-driveable tiles
        li.classList.add("hidden")
        
    }
}


export default Grid;  