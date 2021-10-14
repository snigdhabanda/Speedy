class Clock {
    constructor(){
        this.timeOver = false; 
        this.Id = 0; 
    }

    updateClock(secs, interval){
        const div = document.getElementsByClassName("seconds-hand")[0]
        const degreesRotate = 360 / interval
        const deg = degreesRotate * secs
        div.style.transform = `rotate(${+deg}deg)`
    }

    countTime(interval){
        const clock = this;  
        var countSecs = 0; 
       
        function update(){
           
            if (countSecs === interval){
                clock.timeOver = true
                clearInterval(clock.Id); 
                return;
               
            }
            countSecs += 1;             
            clock.updateClock(countSecs, interval)
        }

       this.Id = setInterval(update, 1000) 
    }
}


export default Clock;
