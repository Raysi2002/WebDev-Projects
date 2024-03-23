const hrs = document.getElementById('watchHours');
const minus = document.getElementById('watchMinutes');
const secs = document.getElementById('watchSeconds');

function updateTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    //Asigning time to this
    hrs.innerText = `${hours} `;
    minus.innerText = `${minutes} ${minutes} ${minutes} ${minutes} ${minutes} ${minutes} ${minutes}`;
    secs.innerText = `${seconds} ${seconds} ${seconds} ${seconds} ${seconds} ${seconds} ${seconds}`;


}
updateTime();
setInterval(updateTime, 1000)