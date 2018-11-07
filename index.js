let store = { drivers: [], passengers: [], trips: [] };

let driverID = 0
let passengerID = 0
let tripID = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = driverID++
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverID === this.id
      })
  }

  passengers() {
    return this.trips().map(function(trip) {
      return trip.passengers()
    })
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = passengerID++
    store.passengers.push(this)
  }

}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.passenger = passenger()
    this.id = ++tripID
    store.trips.push(this)
  }
}
