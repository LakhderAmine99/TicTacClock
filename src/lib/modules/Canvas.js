class Canvas {

    canvas = null;
    height = 0;
    width = 0;
    centerX = 0;
    centerY = 0;
    ctx = null;

    constructor(canvas,height,width){
    
        this.#init(canvas,height,width);
    }

    #init(canvas,width,height){

        this.canvas = canvas;
        this.canvas.height = height;
        this.canvas.width = width;
        this.centerX = this.canvas.width/2;
        this.centerY = this.canvas.height/2;
        this.ctx = this.canvas.getContext("2d");
    }

    getContext(){
        return this.ctx;
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }
}