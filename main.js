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
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengersList.push(traveler)            
        }    
    }
    shouldQuarantine() {
        for (let index = 0; index < this.passengersList.length; index++) {
            const currentpassenger = this.passengersList[index];
            if (currentpassenger.isHealthy === false) {
                return true                
            }
            
        }
        return false
    } 

     
          totalFood() {
           let totalFood = 0
           for (let index = 0; index < this.passengersList.length; index++) {
             let currentPassenger = this.passengersList[index]
             totalFood = totalFood + currentPassenger.food
           }
           return totalFood
        }
    }
        
    
    let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${ wagon.totalFood() } – EXPECTED: 3.`)

    
// Create three travelers
    