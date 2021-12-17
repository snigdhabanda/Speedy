class Player{
    constructor(pos, dir){
         
        this.startPos = pos;
        this.startDir = dir;
        
        this.currPos = this.startPos;
        
        
    }

    renderXpos(ctx, x , y, dx, dy){
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

    renderXneg(ctx, x, y, dx, dy){
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

    renderYpos(ctx, x, y, dx, dy){
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

    renderYneg(ctx, x, y, dx, dy){
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

    getPosX(){
        return this.currPos[0] 
    }

    getPosY(){
        return this.currPos[1] 
    }

    firstRender(ctx){
        switch (this.startDir){
            case [0,1]:
                this.renderYpos(ctx, this.getPosX(), this.getPosY(), 0, 0);
            case[0,-1]:
                this.renderYneg(ctx, this.getPosX(), this.getPosY(), 0, 0);
            case[-1,0]:
                this.renderXneg(ctx, this.getPosX(), this.getPosY(), 0, 0);
            case[1,0]:
                this.renderXpos(ctx, this.getPosX(), this.getPosY(), 0, 0);
        }
    }

   

    move(ctx, x, y){
        let moveDirs = {
            yneg: this.renderYneg.bind(this, ctx, x, y),
            xneg: this.renderXneg.bind(this, ctx, x, y),
            xpos: this.renderXpos.bind(this, ctx, x, y),
            ypos: this.renderYpos.bind(this, ctx, x, y),
            clear: this.clear.bind(this, ctx, this)

        }
        this.render(moveDirs.yneg, moveDirs.xneg, moveDirs.xpos, moveDirs.ypos, moveDirs.clear)

    }

    render(yneg, xneg, xpos, ypos, clear){

        var dx = 0;
        var dy = 0; 

        const currPos = this.currPos
        document.onkeydown = checkKey
        

        function checkKey(e){
            e = e || window.event
            

            if (e.keyCode == '40'){
                dy += 20
                clear()
                yneg(dx, dy)
                currPos[1] = currPos[1] + 20
               
            }
            else if (e.keyCode == '38'){
                dy -= 20
                clear()
                ypos(dx, dy)
                currPos[1] = currPos[1] - 20 
             
            }
            else if (e.keyCode == '37'){
                dx -= 30
                clear()
                xneg(dx, dy)
                currPos[0] = currPos[0] - 30
                
            }
            else if (e.keyCode == '39'){
                dx += 30
                clear()
                xpos(dx, dy)
                currPos[0] = currPos[0] + 30
              
            }
            
        }

        
    }
    

    
}

export default Player;  