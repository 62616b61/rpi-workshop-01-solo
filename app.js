const Raspi = require('raspi-io')
const five = require('johnny-five')

const Matrix = require('./src/Matrix')

const board = new five.Board({
  io: new Raspi({
    excludePins: [
      'P1-19',
      'P1-21',
      'P1-23',
      'P1-24'
    ]
  })
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
  register.reset()

  const matrix = new Matrix(register)

  setInterval(() => {
    setTimeout(() => {
      matrix.setPicture([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ])
    }, 100)

    setTimeout(() => {
      matrix.setPicture([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ])
    }, 200)

    setTimeout(() => {
      matrix.setPicture([
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1]
      ])
    }, 300)

    setTimeout(() => {
      matrix.setPicture([
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1]
      ])
    }, 400)
  }, 400)
})
