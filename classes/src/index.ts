import { measure, once } from "helpful-decorators";

class DateClass {
    private timeZone: string;
    constructor(timeZone: string) {
        this.timeZone = timeZone
    }

    @measure
    getTime() {
        var d = new Date();
        console.log("hii from ne ")
        return d.getTime()
    }

}

const dateObject = new DateClass("IND")
dateObject.getTime()
dateObject.getTime()
dateObject.getTime()
