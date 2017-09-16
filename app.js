const gpio = require('rpi-gpio');

gpio.setup(11, gpio.DIR_IN, readInput);

function readInput() {
    gpio.read(11, function(err, value) {
        console.log('The value is ' + value);
    });
}
