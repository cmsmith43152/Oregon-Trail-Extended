class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true

    }
    eat() {
        if(this.food === 0) {
            this.isHealthy = false
        }else {
            this.food -=1 
        }

    }
    hunt() {
        this.food +=2
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengersList = []

    }
    getAvailableSeatCount () {
    return this.capacity - this.passengersList.length
    }
} 
    let myWagon = new Wagon(2)
    let margaret = new Traveler('Margaret')
    let gary = new Traveler('Gary')
    let matilda = new Traveler('Matilda')
    console.log (myWagon)
    console.log(myWagon.getAvailableSeatCount())

    
// Create three travelers
    