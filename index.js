let store = { drivers: [], passengers: [], trips: [] };

let driverID = 0
let passengerID = 0
let tripID = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id == driveID++
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverID === this.id
      }
    )
  }

  passengers() {
    return store.passengers.filter(
      function(passenger) {
        return passenger.driverID === this.id
      }.bind(this)
    )
  }
}
