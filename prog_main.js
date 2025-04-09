let des = document.getElementById('des').getContext("2d")

let morcego =  new Jog(10,250,100,100,"./img/azazel.png")

let bgg = new Obj (0,0,800,600,'./img/subnautica.png')
let bgf = new Obj (0,0,800,600,'./img/game_over.png')
let bgw = new Obj (0,0,800,600,'./img/victory.png')
 
let enemy01 = new Inimigo (750,100,120,150,"./img/monstro.png")
let enemy02 = new Inimigo (1000,300,180,200,"./img/monstro.png")

let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()
let t5 = new Text()
let pts = 0
let level = 0 
let jogar = true


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

function pontos(){
    if(morcego.point(enemy01)){
        morcego.pts +=5
    }else if(morcego.point(enemy02)){
        morcego.pts += 5
    }
}

function nextLevel(){
    if(pts >=20){
        enemy01.speed += 2
        enemy02.speed += 2
        pts = 0
        level += 1
    }else if(level >=4){
        bgw.des_img()
    }
    
}

function colisao(){
    if(morcego.colid(enemy01)){
        morcego.vida -= 1
        enemy01.recomeca()
    }else if(morcego.colid(enemy02)){
        morcego.vida -= 1
        enemy02.recomeca()
    } 
}

function game_over(){
    if(morcego.vida <=0){
        jogar = false
    }
}

function atualiza(){
    morcego.mov()
    enemy01.mov()
    enemy02.mov()
    colisao()
    nextLevel()
    pontos()
    game_over()
}

function desenha(){
    if(jogar){
        bgg.des_img()
        t1.des_text('Pontos: ',20,30,'yellow','26px Times')
        t2.des_text(pts,104,30,'yellow','26px Times')
        t3.des_text('Vida: ',660,30,'yellow','26px Times')
        t4.des_text(morcego.vida,720,30,'yellow','26px Times')    
        morcego.des_img()
        enemy01.des_img()
        enemy02.des_img()
    }else{
        bgf.des_img()
    }

}

function main(){
    des.clearRect(0,0,800,600)
    atualiza()
    desenha()
    requestAnimationFrame(main)
}

main()