"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const date = new Date();
            return date.getFullYear() - this.year;
        }
    }
}
