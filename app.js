const EventEmitter = require('events')
const Raspi = require('raspi-io')
const five = require('johnny-five')

const Snake = require('./src/Snake')
const Matrix = require('./src/Matrix')
const Joystick = require('./src/Joystick')

const events = new EventEmitter()

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

  const snake = new Snake(events)
  const matrix = new Matrix(events, register)
  const joystick = new Joystick(events)
})
