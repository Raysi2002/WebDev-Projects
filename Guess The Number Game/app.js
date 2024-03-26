const num = document.getElementById("num");
const ok = document.getElementById("ok");

randomNum = Math.ceil(Math.random()*10);
console.log(randomNum);

function verifyNum(){
    if(randomNum == num.value){
        console.log(num.value)
        alert("Correctly guessed!")
    }
}

ok.addEventListener('click', (e)=>{
    console.log("value: ", num.value)
    if(randomNum == num.value){
        alert("Correctly guessed!");
    }
});

