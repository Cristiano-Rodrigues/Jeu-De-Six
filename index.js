const screen = document.getElementById('screen')
const ctx = screen.getContext('2d')
const image = document.getElementById('bg-image')

ctx.drawImage(image, 0, 0)

const defaults = {
  TRACK_LIMIT_PER_PLAYER: 50,
  DISTANCE_BETWEEN_DOORS: 13,
  AMOUNT_OF_PLAYERS_PER_HOUSE: 4,
  AMOUNT_OF_HOUSES: 4,
  AMOUNT_OF_SERIES_TO_WIN: 6,
  TOTAL_OF_DICE_FACES: 6,
  SPECIAL_NUMBER: 6,
  TOTAL_SQUARES_TO_GET_OUT: 5
}

const colors = ['yellow', 'green', 'blue', 'red']

class Game {
  constructor () {
    this.houses = []

    for (let i = 0; i < colors.length; i++) {
      this.houses.push(new House(colors[i], 13 * i))
    }
  }
}

class House {
  constructor (type, initialPos) {
    this.type = type
    this.initialPos = initialPos
    this.children = []

    for (let i = 0; i < defaults.AMOUNT_OF_PLAYERS_PER_HOUSE; i++) {
      this.children.push({
        id: i + 1,
        color: type,
        state: 'initial'
      })
    }
  }
}

const states = [
  'initial', 'playing', 'arrested', 'getting out', 'out'
]

console.log(new Game())