const second = 1000, 
minute  = second*60,
hour = minute*60,
day = hour * 24;
const aleftdays = document.querySelector(".day");
const alefthours = document.querySelector(".hour");
const aleftminutes = document.querySelector(".minute");
const aleftseconds = document.querySelector(".second");


        const countertimer = () =>{
            setInterval(() => {
                const date = new Date().getTime();
                const d = new Date("2023-10-29").getTime();
                
                const difference = d - date;
              
              const leftdays = Math.floor(difference / day);
                const lefthours = Math.floor((difference % day)/hour);
                const leftminutes = Math.floor((difference % hour)/minute);
                const leftseconds = Math.floor((difference % minute)/second);
                 aleftdays.innerText =  leftdays;
                 alefthours.innerText =  lefthours;
                 aleftminutes.innerText =   leftminutes;
                 aleftseconds.innerText =   leftseconds;  
            }, 1000);
       
     }
     countertimer();