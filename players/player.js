let userPlayer = document.querySelectorAll(".players")
let myFocus = 0
userPlayer[myFocus].classList.add("new")
document.addEventListener("keydown", function(){
    userPlayer[myFocus].classList.remove("new")
    if(event.key === "ArrowLeft" || event.key === "A" || event.key === "a"){
        myFocus = (myFocus - 1 + userPlayer.length) % userPlayer.length
    }
    else if(event.key === "Enter"){
        window.location.href="../game-chicken/index.html"
    }
    else{
        window.location.href
    }

    if(event.key === "ArrowRight" || event.key === "D" || event.key === "d"){
        myFocus = (myFocus + 1) % userPlayer.length
        window.location.href="../game/index.html"
    }
    userPlayer[myFocus].classList.add("new")
})

let myLoad = document.querySelector(".load")
myLoad.classList.add("new-load")

