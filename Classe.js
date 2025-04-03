class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    des_img(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }
}


class Jog extends Obj{
    dir = 0

    mov(){
        this.y += this.dir
        if(this.y <= 0){
            this.y = 0
        }else if(this.y >=600){
            this.y = 500
        }
    }

}