

class Passenger{
    constructor(grid, ctx){
        this.grid = grid.layout
        this.startPos = this.getRandomPos()
        this.destination = this.getRandomPos()
        this.renderPassenger(ctx)
        this.renderDestination(ctx)
        
        // console.log(this.startPos)
        
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

            // const x = x_pos[Math.round(Math.random() * x_pos.length )]
            // const y = y_pos[Math.round(Math.random() * y_pos.length)]

            const li = document.getElementById(`${x},${y}`)

            if (li.className.split(" ")[1] !== "hidden"){
                return [x,y] 
            }
       
        }
    }

    renderPassenger(ctx){
        // console.log(this.startPos)
        ctx.fillStyle = '#f56f42';
        ctx.beginPath();
        ctx.arc(this.startPos[0]+15, this.startPos[1] + 8, 4, 0, 2 * Math.PI, false);
        ctx.stroke(); 
        ctx.fill(); 

        ctx.fillStyle = 'purple';
        ctx.beginPath();
        ctx.arc(this.startPos[0]+15, this.startPos[1] + 19, 6, 0, Math.PI, true);
        ctx.stroke(); 
        ctx.fill();
        
    }

    renderDestination(ctx){
        ctx.beginPath()
        ctx.fillStyle = "white"
        ctx.fillRect(this.destination[0] + 11, this.destination[1], 10, 20)
        ctx.strokeRect(this.destination[0] + 11, this.destination[1], 10, 20)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.fillRect(this.destination[0] + 13, this.destination[1] + 8, 6, 12)
        ctx.fill()
    }

}


export default Passenger; 