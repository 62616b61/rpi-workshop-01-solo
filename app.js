const Raspi = require('raspi-io')
const five = require('johnny-five')

const Matrix = require('./src/Matrix')

const board = new five.Board({
  io: new Raspi()
})

board.on('ready', () => {
  const register = new five.ShiftRegister({
    isAnode: true,
    pins: {
      data: 'P1-11',
      clock: 'P1-15',
      latch: 'P1-13',
      reset: 'P1-7'
    }
  })

  const matrix = new Matrix(register)
})
