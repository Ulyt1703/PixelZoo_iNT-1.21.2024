document.addEventListener("keydown", function(){
    let myLoading = document.querySelector(".loading")
    myLoading.classList.add("new")
    if(event.key === "Enter"){
        setTimeout(function(){
            window.location.href="../players/index.html"
        },1850)
        setTimeout(function(){
            myLoading.classList.remove("new")
        },3100)
    }
})


let texT = document.querySelector(".TEXT")
window.addEventListener("load", function(){
    texT.classList.add("animation")
    setTimeout(function(){
        texT.classList.remove("animation")
    },1200)
})

let logoPng = document.querySelector(".logo-png")
window.addEventListener("load", function(){
    logoPng.classList.add("load-logo")
    setTimeout(function(){
        logoPng.classList.remove("load-logo")
    },1050)
})

let mainBlock = document.querySelector(".main__inner")
window.addEventListener("load", function(){
    mainBlock.classList.add("load-main")
    setTimeout(function(){
        mainBlock.classList.remove("load-main")
    },1050)
})

