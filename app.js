let min = sec = ms = "0" + 0;
let setIntervalId;
const startStopBtn = document.querySelector(".startStop");
const resetBtn = document.querySelector(".reset");

startStopBtn.addEventListener("click", (e)=>{
    if (setIntervalId == undefined){
        setIntervalId = setInterval(()=>{
            ms++
            ms = ms < 10 ? "0" + ms : ms;
            if (ms == 100){
                sec++
                sec = sec < 10 ? "0" + sec : sec;
                ms = "0" + 0;
            }
            if (sec == 60){
                min++
                min = min < 10 ? "0" + min : min;
                sec = "0" + 0;
            }
            putValue()
            e.target.className = "fa-solid fa-pause"
        }, 10);
    }
    else{
        clearInterval(setIntervalId);
        setIntervalId = undefined;
        e.target.className = "fa-solid fa-play"
    }
});
resetBtn.addEventListener("click", (e)=>{
    clearInterval(setIntervalId);
    setIntervalId = undefined;
    min = sec = ms = "0" + 0
    e.target.parentElement.previousElementSibling.firstElementChild.className = "fa-solid fa-play"
    putValue();
});
function putValue(){
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
}


