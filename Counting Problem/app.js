let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let count = document.querySelector("#ct");
let flag = 0;

function counting() {
    let i = 0;
    return () => {
        if (flag === 0) {
            let startCount = setInterval(() => {
                count.innerHTML = i;
                i++;
                flag = 1;
                if (i >= 10) {
                    clearInterval(startCount);
                }
            }, 300);
        }
        if(flag == 1){
            let reverseCount = setInterval(() => {
                count.innerHTML = i;
                i--;
                flag = 0;
                if(i <= 0){
                    clearInterval(reverseCount);
                }
            }, 300)
        }
    }
}
function resetCount(){
    return () => {
        count.innerHTML = "Count";
    }
}

start.addEventListener("click", counting());
reset.addEventListener("click", resetCount());