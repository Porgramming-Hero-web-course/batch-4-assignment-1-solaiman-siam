"use strict";
{
    // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
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
    const myCar = new Car("Honda", "Civic", 2018);
    const result = myCar.getCarAge();
    console.log(result);
}
