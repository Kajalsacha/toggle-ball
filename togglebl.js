const ball = document.querySelector("#ball");
const jumpBtn = document.querySelector(".btn1");
const stopBtn = document.querySelector(".btn2");

jumpBtn.addEventListener("click", ()=>{
    ball.classList.add("animate");
})
stopBtn.addEventListener("click",()=>{
    ball.classList.remove("animate");
})