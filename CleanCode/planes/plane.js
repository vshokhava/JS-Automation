class plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    getMaxLoadCapacity() {
     let result = this.maxLoadCapacity;
     return result;
    }
}

module.exports = plane;
