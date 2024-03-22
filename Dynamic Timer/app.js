function updateTime(){
        const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hrs = document.getElementById("hrs");
    const mins = document.getElementById("mins");
    const secs = document.getElementById("secs");

    // console.log(hours, ":", minutes, ":", seconds);


    hrs.innerText = hours;
    mins.innerText = minutes;
    secs.innerText = seconds;
}
updateTime();
setInterval(updateTime, 1000);