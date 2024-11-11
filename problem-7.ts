{


class Car {
    constructor(public make: string, public model: string , public year: number)  {
    }
    getCarAge() {
        const date = new Date()

        return date.getFullYear() - this.year
    }
}


}