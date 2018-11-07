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
    return store.trips.filter(trip => trip.driver())
  }

  passengers() {
    return this.trips().map(trip => trip.passenger())
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
    this.id = ++tripID
    store.trips.push(this)
  }

  setDriver(driver){
    this.driverId = driver.id
  }

  passenger() {
    return store.passengers.find(passenger =>
      this.passengerId === passenger.id)
  }

  driver() {
    return store.drivers.find(driver =>
      this.driverId === driver.id)
  }


}
