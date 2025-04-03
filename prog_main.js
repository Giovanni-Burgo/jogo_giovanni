let des = document.getElementById('des').getContext("2d")

let morcego =  new Jog(10,250,100,100,"./img/azazel.png")

let bgg = new Obj (0,0,800,600,'./img/subnautica.png')


document.addEventListener('keydown', (e)=>{
    if(e.key === "ArrowUp"){
        morcego.dir = -10
    }else if(e.key === "ArrowDown"){
        morcego.dir = +10
    }
})


document.addEventListener('keyup', (e)=>{
    if(e.key === "ArrowUp"){
        morcego.dir = 0
    }else if(e.key === "ArrowDown"){
        morcego.dir = 0
    }
})

function atualiza(){
    morcego.mov()
}

function desenha(){
    bgg.des_img()
    morcego.des_img()

}





function main(){
    des.clearRect(0,0,800,600)
    atualiza()
    desenha()
    requestAnimationFrame(main)
}

main()