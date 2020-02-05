import _ from 'lodash'

function car(brand, colour, model) {
    this.marca = brand;
    this.color = colour;
    this.modelo = model;

    function turnOn() {
        this.turnedOn = false;
    }

    function turnOff() {
        this.turnedOff = true;
    }
}

let autoNuevo = new car('Fiat', 'Red', 600);

function onOrOff() {
    if (car.turnOn == true) {
        console.log('The car is turned on!')
    } else {
        console.log('The car is turned off!')
    }
}