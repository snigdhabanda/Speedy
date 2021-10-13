class Tile{
    constructor(x_pos, y_pos){
        this.x_pos = x_pos; 
        this.y_pos = y_pos; 

    }

    getStartPos(){
        return [this.x_pos, this.y_pos]
    }

    getEndPos(){
        return [this.x_pos + 30, this.y_pos + 20]
    }
}

export default Tile;  