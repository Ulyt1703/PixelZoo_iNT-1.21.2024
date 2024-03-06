let sprite = document.querySelector(".character-game")
let position = {
    x: 0,y:0
}

/* const ActiveSprite = sessionStorage.getItem("ActiveSprite")

sprite.src = spriteList[ActiveSprite]
let a = 0; */



document.addEventListener("keydown", function(){
    
    if(event.which === 38){ /* TOP */

        console.log(position)
        position.y = position.y - 110
        sprite.style.transform = `translate(${position.x}px, ${position.y}px)`;
        setTimeout(()=>{
            position.y = position.y + 110
            sprite.style.transform = `translate(${position.x}px, ${position.y}px )`;

        },200)
    }




    if(event.which === 39){ /* LEFT */
    if(position.x == 1100){
            a = a - 60
            document.body.style.backgroundPositionX = `${a}px` 
        }else{
            position.x = position.x + 50
            sprite.style.transform = `translate(${position.x}px, ${position.y}px )`;
            
        }
        
        
        
        
    }
    if(event.which === 37){ /* RIGHT */
    if(position.x >= 10){
        position.x = position.x - 50
        sprite.style.transform = `translate(${position.x}px, ${position.y}px )`;
    }
}
})
