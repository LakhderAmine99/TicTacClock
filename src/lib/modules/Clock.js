class Clock {

    #date = null;
    #hour = 0;
    #minute = 0;
    #seconde = 0;

    constructor(){

        this.#init();
    }

    #init(){
        
        this.setToCurrentTime();
    }

    setToCurrentTime(){

        this.#date = new Date();
        this.#hour = this.#date.getHours();
        
        if(this.#hour >= 12)
        {
            this.#hour = this.#date.getHours() - 12;
        }

        this.#minute = this.#date.getMinutes();
        this.#seconde = this.#date.getSeconds();
    };

    getHours(){
        return this.#hour;
    };

    getMinutes(){
        return this.#minute;
    };

    getSeconds(){
        return this.#seconde;
    };

    getCurrentTimeString(){
        return this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
    };

    getRadHours(){
        return  (Math.PI/6)*this.getHours();
    };

    getRadMinutes(){
        return (Math.PI/30)*this.getMinutes();
    };

    getRadSeconds(){

    };

};
