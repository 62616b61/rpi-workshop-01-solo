module.exports = class Snake {
  constructor (events) {
    this.events = events

    this.worldSize = 8
    this.snake = {x: 4, y: 4}
    this.speed = {x: 0, y: 0}

    this.subscribe()
    this.loop()
  }

  loop () {
    setInterval(() => {
      this.emit()
    }, 250)
  }

  updateSnake () {
    const nextPosX = this.snake.x + this.speed.x
    const nextPosY = this.snake.y + this.speed.y

    if (nextPosX >= 0 && nextPosX < this.worldSize &&
      nextPosY >= 0 && nextPosY < this.worldSize) {
      this.snake = {x: nextPosX, y: nextPosY}
    }
  }

  move (direction) {
    switch (direction) {
      case 'up':
        this.speed.x = -1
        this.speed.y = 0
        break
      case 'down':
        this.speed.x = 1
        this.speed.y = 0
        break
      case 'right':
        this.speed.x = 0
        this.speed.y = 1
        break
      case 'left':
        this.speed.x = 0
        this.speed.y = -1
        break
    }

    this.updateSnake()
  }

  world () {
    const world = new Array(this.worldSize)
    for (let x = 0; x < this.worldSize; x++) world[x] = new Array(this.worldSize).fill(0)

    world[this.snake.x][this.snake.y] = 1

    return world
  }

  subscribe () {
    this.events.on('move', (direction) => this.move(direction))
  }

  emit () {
    this.events.emit('display', this.world())
  }
}
