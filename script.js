let start = document.getElementById("s-btn");
let lap = document.getElementById("l-btn");
let reset = document.getElementById("r-btn");
let dev_info = document.getElementById("dev-info");
let time = document.getElementById("time");
let lap_list = document.getElementById("l-list");
let ms = "00";
let sec = "00";
let min = "00";
let isstart ; 
lap.id = "disable";
let inter;
start.addEventListener('click' ,()=>{

    if(start.innerHTML == 'Pause'){
        start.innerHTML = "Start";
        isstart = false;
        lap.id = "disable";         
    }else if(start.innerHTML == "Start"){
        start.innerHTML = "Pause";
        isstart = true;
        lap.id = "l-btn"
        
        inter = setInterval(()=>{

            if(isstart){
                //update ms
                ms++;
                if(ms <= 9 && ms > 99 == false){
                    ms = "0"+ +ms; 
                    }
                    //update sec
                    else if(ms == 100){
                        ms = "00";
                        sec++;
                        if(sec <= 9 && sec > 59 == false){
                            sec = "0" + +sec;
                        }
                        //update min
                        else if(sec == 60){
                            sec = 0;
                            min++;
                            if(min <= 9 && min > 59==false){
                                min = "0" + +min;
                            }
                        }
                    }               
                time.innerHTML = `${min} : ${sec} : ${ms}`;
            }                      
        } , 10 )   
    }
    if(isstart == false){
        clearInterval(inter);     
    }
} )

lap.addEventListener('click' , ()=>{
    if(isstart){
        let newlap  = document.createElement('li');
        let newt = time.innerHTML;
         newlap.append(newt); 
        lap_list.insertAdjacentElement('afterbegin' , newlap)
    }
})

reset.addEventListener('click' , ()=>{
    ms = "00"; sec = "00";min = "00"
    lap_list.innerHTML = "";
     time.innerHTML = " 00 : 00 : 00";
     start.innerHTML = "Start"; 
     isstart = false;
     lap.id = "disable"; 
     clearInterval(inter);
})


//devloper
let d_btn = document.getElementById("dev-btn");
let dev = document.getElementById("dev");
let main = document.getElementById("main-div");
let isshow = false;
let timeout;
d_btn.addEventListener("click" , ()=>{   
    if(isshow == false){
        main.style.cssText += "filter: blur(2px);";
        dev.style.cssText += " display : flex; animation : devinfoshow 0.5s ease-in-out; z-index : 5"
        isshow = true;
    }else{
        dev.style.cssText += "animation : devinfohide 0.5s ease-in-out;"
        timeout = setTimeout(()=>{
            main.style.cssText += "filter: blur();";
            dev.style.cssText += "z-index : 1"; 
            setTimeout(()=> dev.style.display = "none" , 500);         
            isshow = false;
        },495)
        
    }

    if(isshow == false){
        clearTimeout(timeout);
    }
})

