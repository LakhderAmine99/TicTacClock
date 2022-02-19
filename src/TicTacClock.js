function TicTacClock(){

    let utils = new Utils();
    let canvasElm = utils.element('canvas');
    let angle = (Math.PI*2)/60;
    let minutes = null;
    let hours = null;

    let sprites = [];
    let images = [];
    let sources = 
    [
        ["./public/assets/images/c1.png",1106,1116],
        ["./public/assets/images/a1.png",459,72],
        ["./public/assets/images/a2.png",366,89]
    ];

    for (let i = 0; i < 3; i++) 
    {
        images[i] = new Image();
        images[i].src = sources[i][0];
        images[i].width = sources[i][1];
        images[i].height = sources[i][2];

        sprites[i] = Object.create(Sprite);
        sprites[i].image = images[i];
        sprites[i].x = 0;
        sprites[i].y = 0;
        sprites[i].width = images[i].width / 6;
        sprites[i].height = images[i].height / 6;
    }

    let clock = new Clock();
    let canvas = new Canvas(canvasElm, 400, 400);
    
    this.start = function(){

        hours = clock.getRadHours();
        minutes = clock.getRadMinutes();

        loadImages();

        setTimeout(function(){
            
            loadComplated();
            
        },100);

        update();
    }

    function loadImages(){

        for (let i = 0; i < sprites.length; i++) 
        {
            let sprite = sprites[i];

            sprite.image.onload = () => { console.log('images loaded'); };

            sprite.image.onerror = () => { alert('error loading assets !'); };
        }
    };

    function loadComplated(){

        sprites[0].x = canvas.centerX / 2 + 8;
        sprites[0].y = canvas.centerY / 2;

        sprites[1].x = sprites[0].centerx() - 5;
        sprites[1].y = sprites[0].centery() - 6;

        sprites[2].x = sprites[0].centerx() - 5;
        sprites[2].y = sprites[0].centery() - 9;
        
        render();
    }

    function update(){

        setInterval(()=>{

            render();
            minutes += (Math.PI*2)/60;

        },1000);
    }

    function render() {

        canvas.getContext().clearRect(0,0,canvas.canvas.width,canvas.canvas.height);
        let sprite = null;

        for (let i = 0; i < sprites.length; i++) 
        {
            sprite = sprites[i];

            if (i == 1 || i == 2) 
            {
                canvas.getContext().save();
                canvas.getContext().translate(sprites[0].centerx(),sprites[0].centery());

                if (i == 1) 
                {
                    canvas.getContext().rotate(minutes);
                } 
                else 
                {
                    canvas.getContext().rotate(hours);
                }

                canvas.getContext().translate(-sprites[0].centerx(),-sprites[0].centery());
                canvas.getContext().drawImage(sprite.image,sprite.x,sprite.y,sprite.width,sprite.height);
                canvas.getContext().restore();
            } 
            else 
            {
                canvas.getContext().drawImage(sprite.image,sprite.x,sprite.y,sprite.width,sprite.height);
            }
        }
    };
};

const setup = () => {

    window.addEventListener('load', () => {

        window.app = new TicTacClock();
        window.app.start();
    });
};

setup();
