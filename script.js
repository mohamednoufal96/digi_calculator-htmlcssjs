class DigitalClock {
    constructor(element) {
        this.element = element;
    }
    
    getTimeParts(){
        const now = new Date();

        return{
            hour : now.getHours() % 12 || 12,
            minute : now.getMinutes(),
            isAm : now.getHours() < 12
        }
    }

    update(){
        const parts = this.getTimeParts();

        const minutesFormatted = parts.minute.toString().padStart(2,"0");
        const timeFormatted = `${parts.hour}:${minutesFormatted}`;
        const amPmFormatted = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPmFormatted;

    }

    start(){
        // this.update();
        
        setInterval(() => {
            this.update();
            
        },500)
    }


}

const clockElement = document.querySelector('.clock');
const clockObject = new DigitalClock(clockElement);

clockObject.start();