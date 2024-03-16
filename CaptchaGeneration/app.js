const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

function generateRandomString(){
    return () => {
        let randomStr = "";
        for(let i=0; i<5; i++){
            let randStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopgrstuvwxyz1234567890";
            randomStr += randStr.charAt(Math.floor(Math.random() * 62));
        }
        container.innerText = `${randomStr}`;
    }
}

btn.addEventListener("click", generateRandomString());