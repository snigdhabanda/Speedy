// const { create } = require("core-js/core/object");
import Tile from "./tile"

class Grid{
    constructor(X_DIM, Y_DIM){
        //grid dimensions are same as the map
        this.width = X_DIM
        this.height = Y_DIM
        
        this.layout = [] //2D array to hold all tiles in the grid  
        this.place_tiles()
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

                // if (((j < 160 && i <= 210) || (j <= 560 && i <= 90) || (j <= 20 && i <= 720) || ( j < 560 && i >= 660))){
                //     this.hide_tiles(li)
                // }

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