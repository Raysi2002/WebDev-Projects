let autoCircles = document.getElementById("autoCircles");

// document.addEventListner('mousemove', (e) => {
//     console.log("Position: ", e.pageX, e.pageY);
//     // const circle = document.createElement('div');
//     // circle.innerHTML = "circle";

// })

document.addEventListener("click", (e) => {
    console.log("Position: " , e.pageX, e.pageY);
    const circle = document.createElement('div');
    // circle.innerHTML = "Circle";
    circle.style.backgroundColor = '#3ffbbf';
    circle.style.height = "50px";
    circle.style.width = "50px";
    circle.style.borderRadius = "50%";
    circle.style.position = "absolute";
    circle.style.left = `${e.clientX - 25}px`;
    circle.style.top = `${e.clientY - 25}px`;
    autoCircles.appendChild(circle)
});
