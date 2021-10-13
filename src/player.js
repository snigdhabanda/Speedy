import Grid from "./grid"

class Player{
    constructor(grid, ctx){
        this.grid = grid.layout; 
        this.startPos = this.getRandomPos();
        
        this.DIRS = [[0,1], [0,-1], [-1,0], [1,0]]
        this.startDir = this.getRandomDir();
        
        this.currPos = this.startPos;
        this.currDir = this.startDir; 
        
        

        // const pos = `${this.startPos[0]},${this.startPos[0]}`
        // console.log(pos)
        // const li = document.getElementById(pos)
        // console.log(li)
        // const x = li.offsetLeft
        // const y = li.offsetTop; 
        // console.log(x, y)

        
        let x =  this.currPos[0]
        let y = this.currPos[1]
       
        this.render(ctx, this.orient_yneg.bind(this, ctx, x, y), this.orient_xneg.bind(this, ctx, x, y), this.orient_xpos.bind(this, ctx, x, y), this.orient_ypos.bind(this, ctx, x, y), this.clear.bind(this, ctx, this))
    
    }

    orient_xpos(ctx, x , y, dx, dy){
        //bumper 
        ctx.fillStyle = "#8042fc"
        ctx.beginPath();
        ctx.moveTo(x+dx+10,y+dy+5);
        ctx.bezierCurveTo(x+dx, y+dy+5, x+dx, y+10+dy+5, x+dx+10, y+10+dy+5);
        ctx.stroke();
        ctx.fill(); 

        
        //body
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.fillRect(x+dx+10, y+dy+5, 10,10)
        ctx.fill()

       //tail
        ctx.fillStyle = "#8042fc"
        ctx.beginPath();
        ctx.moveTo(x+20+dx, y+dy+5);
        ctx.bezierCurveTo(x+dx+30, y+dy+5, x+dx+30, y+15+dy, x+20+dx, y+15+dy);
        ctx.stroke();
        ctx.fill(); 

        //headlight
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(x+25+dx, y+5+dy, 1.75, 0, 2 * Math.PI, false);
        ctx.fill(); 

        //headlight
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(x+25+dx, y+15+dy, 1.75, 0, 2 * Math.PI, false);
        ctx.fill(); 

        

    }

    orient_xneg(ctx, x, y, dx, dy){
        //bumper 
        ctx.fillStyle = "#8042fc"
        ctx.beginPath();
        ctx.moveTo(x+dx+10,y+dy+5);
        ctx.bezierCurveTo(x+dx, y+dy+5, x+dx, y+10+dy+5, x+10+dx, y+10+dy+5);
        ctx.stroke();
        ctx.fill(); 

        
        //body
        ctx.beginPath(); 
        ctx.fillStyle = "black"
        ctx.fillRect(x+dx+10, y+dy+5, 10,10)
        ctx.fill()

       //tail
        ctx.fillStyle = "#8042fc"
        ctx.beginPath();
        ctx.moveTo(x+20+dx, y+dy+5);
        ctx.bezierCurveTo(x+30+dx, y+dy+5, x+30+dx, y+10+dy+5, x+20+dx, y+10+dy+5);
        ctx.stroke();
        ctx.fill(); 

        //headlight
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(x+5+dx, y+dy+5, 1.5, 0, 2 * Math.PI, false);
        ctx.fill(); 

        //headlight
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(x+5+dx, y+10+dy+5, 1.5, 0, 2 * Math.PI, false);
        ctx.fill(); 

    }

    orient_ypos(ctx, x, y, dx, dy){
        //bumper 
        ctx.fillStyle = "#8042fc"
        ctx.beginPath();
        ctx.moveTo(x+dx+12,y+dy+5);
        ctx.bezierCurveTo(x+dx+12, y+dy-5, x+22+dx, y+dy-5, x+22+dx, y+dy+5);
        ctx.stroke();
        ctx.fill(); 

        //body
        ctx.beginPath();   
        ctx.fillStyle = "black"
        ctx.fillRect(x+dx+12, y+dy+5, 10,10)
        ctx.fill()


       //tail
        ctx.fillStyle = "#8042fc"
        ctx.beginPath();
        ctx.moveTo(x+dx+12, y+15+dy);
        ctx.bezierCurveTo(x+dx+12, y+25+dy, x+22+dx, y+25+dy, x+22+dx, y+15+dy);
        ctx.stroke();
        ctx.fill(); 

        //headlight
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(x+dx+12, y+dy, 1.5, 0, 2 * Math.PI, false);
        ctx.fill(); 

        //headlight
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(x+22+dx, y+dy, 1.5, 0, 2 * Math.PI, false);
        ctx.fill();  

    }

    orient_yneg(ctx, x, y, dx, dy){
        //bumper 
        ctx.fillStyle = "#8042fc"
        ctx.beginPath();
        ctx.moveTo(x+dx+10,y+dy+5);
        ctx.bezierCurveTo(x+dx+10, y-5+dy, x+20+dx, y-5+dy, x+20+dx, y+dy+5);
        ctx.stroke();
        ctx.fill(); 

        
        //body
        ctx.beginPath(); 
        ctx.fillStyle = "black"
        ctx.fillRect(x+dx+10, y+dy+5, 10,10)
        ctx.fill()


       //tail
        ctx.fillStyle = "#8042fc"
        ctx.beginPath();
        ctx.moveTo(x+dx+10, y+15+dy);
        ctx.bezierCurveTo(x+dx+10, y+25+dy, x+20+dx, y+25+dy, x+20+dx, y+15+dy);
        ctx.stroke();
        ctx.fill(); 

        //headlight
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(x+dx+10, y+20+dy, 1.5, 0, 2 * Math.PI, false);
        ctx.fill(); 

        //headlight
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(x+20+dx, y+20+dy, 1.5, 0, 2 * Math.PI, false);
        ctx.fill(); 
    }


    clear(ctx,obj){
        ctx.clearRect(obj.currPos[0] - 5, obj.currPos[1] - 5, 40, 40)
        
    }


    render(ctx, orient_yneg, orient_xneg, orient_xpos, orient_ypos, clear){

        document.onkeydown = checkKey
        var dx = 0;
        var dy = 0; 

        const currPos = this.currPos
        

        function checkKey(e){
            e = e || window.event
            

            if (e.keyCode == '40'){
                dy += 20
                clear()
                orient_yneg(dx, dy)
                currPos[1] = currPos[1] + 20
                console.log(currPos)   
            }
            else if (e.keyCode == '38'){
                dy -= 20
                clear()
                orient_ypos(dx, dy)
                currPos[1] = currPos[1] - 20 
                console.log(currPos)
            }
            else if (e.keyCode == '37'){
                dx -= 30
                clear()
                orient_xneg(dx, dy)
                currPos[0] = currPos[0] - 30 
                console.log(currPos)
            }
            else if (e.keyCode == '39'){
                dx += 30
                clear()
                orient_xpos(dx, dy)
                currPos[0] = currPos[0] + 30
                console.log(currPos)
            }
            
        }

        
        // document.addEventListener("keydown", (e) => {
        //     switch(e.keycode){
        //         case 37:
        //             dx -= 30
        //         case 38:
        //             dy -= 20;
        //         case 39:
        //             dx += 30;
        //         case 40:
        //             dy += 20;
        //     }

        
    }

    getRandomPos(){

        //have to remove hidden tiles  
        const x_pos = []
        const y_pos = []

        this.grid[0].forEach((ele)=>{
            x_pos.push(ele.getStartPos()[0])
        })

        this.grid.forEach((ele)=>{
            y_pos.push(ele[0].getStartPos()[1])
        })

        const x = x_pos[Math.round(Math.random() * x_pos.length)]
        const y = y_pos[Math.round(Math.random() * y_pos.length)]
        
        return [x,y]


    }

    getRandomDir(){
        let rand = Math.random() * this.DIRS.length
        if (rand >= 3.5) rand = Math.floor(rand); 
        else rand = Math.round(rand);

        return this.DIRS[rand]

    }

    
}

export default Player;  