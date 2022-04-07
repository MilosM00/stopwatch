"use strict";


const hours = document.querySelector(`.hours`);
const minutes = document.querySelector(`.minutes`);
const seconds = document.querySelector(`.seconds`);

const buttonStart = document.querySelector(`.button-start`);
const buttonReset = document.querySelector(`.button-reset`);


let startStopwatch = null;
let activeStopwatch = false;
let pauseInterval = false;

buttonStart.addEventListener(`click`, () =>{

    if(activeStopwatch === false){

        buttonStart.textContent = `STOP`;
        buttonStart.style.backgroundColor = `rgb(35, 35, 35)`;

        const stopwatch = function(){
            if(seconds.textContent < `59` && pauseInterval === false){
                seconds.textContent++;
            }
            else if(minutes.textContent < `59` && seconds.textContent === `59` && pauseInterval === false){
                seconds.textContent = `00`;
                minutes.textContent++;
            }
            else if(minutes.textContent === `59` && pauseInterval === false){
                minutes.textContent = `00`;
                hours.textContent++;
            }

            switch(seconds.textContent){
                case `0`: seconds.textContent = `00`; break;
                case `1`: seconds.textContent = `01`; break;
                case `2`: seconds.textContent = `02`; break;
                case `3`: seconds.textContent = `03`; break;
                case `4`: seconds.textContent = `04`; break;
                case `5`: seconds.textContent = `05`; break;
                case `6`: seconds.textContent = `06`; break;
                case `7`: seconds.textContent = `07`; break;
                case `8`: seconds.textContent = `08`; break;
                case `9`: seconds.textContent = `09`; break;

                default: seconds.textContent;  
            }

            switch(minutes.textContent){
                case `0`: minutes.textContent = `00`; break;
                case `1`: minutes.textContent = `01`; break;
                case `2`: minutes.textContent = `02`; break;
                case `3`: minutes.textContent = `03`; break;
                case `4`: minutes.textContent = `04`; break;
                case `5`: minutes.textContent = `05`; break;
                case `6`: minutes.textContent = `06`; break;
                case `7`: minutes.textContent = `07`; break;
                case `8`: minutes.textContent = `08`; break;
                case `9`: minutes.textContent = `09`; break;

                default: minutes.textContent;  
            }

            switch(hours.textContent){
                case `0`: hours.textContent = `00`; break;
                case `1`: hours.textContent = `01`; break;
                case `2`: hours.textContent = `02`; break;
                case `3`: hours.textContent = `03`; break;
                case `4`: hours.textContent = `04`; break;
                case `5`: hours.textContent = `05`; break;
                case `6`: hours.textContent = `06`; break;
                case `7`: hours.textContent = `07`; break;
                case `8`: hours.textContent = `08`; break;
                case `9`: hours.textContent = `09`; break;

                default: hours.textContent;  
            }

        };

        const startInterval = function(){
            startStopwatch = setInterval(function(){
                stopwatch();
            }, 1000);
        };
        startInterval();

        activeStopwatch = true;
    }
    else{
        pauseInterval = !pauseInterval;

        if(pauseInterval === true){
            buttonStart.textContent = `START`;
            buttonStart.style.backgroundColor = `rgb(120, 120, 120)`;
        }

        else if(pauseInterval === false){
            buttonStart.textContent = `STOP`;
            buttonStart.style.backgroundColor = `rgb(35, 35, 35)`;
        }
    }

});

buttonReset.addEventListener(`click`, () =>{
    hours.textContent = `00`;
    minutes.textContent = `00`;
    seconds.textContent = `00`;

    activeStopwatch = false;
    pauseInterval = false;

    buttonStart.textContent = `START`;
    buttonStart.style.backgroundColor = `rgb(120, 120, 120)`;

    clearInterval(startStopwatch);
});