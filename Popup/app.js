const popup = document.getElementById("popup");
const show = document.getElementById('show');
let i = 0;
show.addEventListener('click', (e)=>{
    if(i === 0){
        show.textContent = "Hide";
        popup.style.visibility = "visible";
        i = 1;
        show.focus;
    }
    else{
        show.textContent = "Show";
        popup.style.visibility = "hidden";
        i = 0;
    }
})