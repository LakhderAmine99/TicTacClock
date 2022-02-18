function TicTacClock(){

    let utils = new Utils();
    let canvasElm = utils.element('canvas');
    
    let img = new Image();
    let img1 = new Image();
    let img2 = new Image();
    img.src = "../public/assets/images/c1.png";
    img1.src = "../public/assets/images/a1.png";
    img2.src = "../public/assets/images/a2.png";
    
    let clock = new Clock();
    let canvas = new Canvas(canvasElm,img.width/4,img.height/4);
    
    this.start = function(){

        img.onload = function(){  

            canvas.getContext().drawImage(this,canvas.centerX - this.width/12,canvas.centerY - this.height/12,this.width/6,this.height/6);

        }
        img1.onload = function(){  

            canvas.getContext().drawImage(this,canvas.centerX - this.width/12,canvas.centerY - this.height/12,this.width/6,this.height/6);

        }
        img2.onload = function(){  

            canvas.getContext().drawImage(this,canvas.centerX - this.width/12,canvas.centerY - this.height/12,this.width/6,this.height/6);

        }
        
    }
};

const setup = () => {

    window.addEventListener('load',()=>{

        window.app = new TicTacClock();
        window.app.start();
    });
};

setup();