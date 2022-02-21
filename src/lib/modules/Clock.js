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
        return this.#hour + this.#minute/60 + this.#seconde/3600;
    };

    getMinutes(){
        return this.#minute + this.#seconde/60;
    };

    getSeconds(){
        return this.#seconde;
    };

    /**
     * 
     * just displaying stuff for debuging
     * @returns 
     */
    getCurrentTimeString(){
        return this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
    };

    /**
     * 
     * This function converts hours from its time value to the specific radian angle
     * this is for positioning the hours hand in the correct place.
     * @returns 
     * 
     */
    getRadHours(){
        return  (Math.PI/6)*this.getHours() - Math.PI/2;
    };

    /**
     * 
     * This function converts minutes from its time value to the specific radian angle
     * this is for positioning the minutes hand in the correct place.
     * @returns 
     */
    getRadMinutes(){
        return (Math.PI/30)*this.getMinutes() - Math.PI/2;
    };

    /**
     * 
     * This function converts seconds from its time value to the specific radian angle
     * this is for positioning the seconds hand in the correct place.
     * @returns 
     */
    getRadSeconds(){
        return (Math.PI/30)*this.getSeconds() - Math.PI/2;
    };

};
