/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game()
const startButton = document.getElementById('btn__reset')
startButton.addEventListener('click', (e) => {
  game.resetGame(e)
  game.startGame()
})

const keyboard = document.getElementById('qwerty')
const keys = document.querySelectorAll('.key')

keyboard.onclick = (e) => {
  const target = e.target
  if (target.className === 'key') {
    game.handleInteraction(target)
  }
}

document.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.key === keys[i].innerHTML && keys[i].disabled === false) {
      game.handleInteraction(keys[i])
    }
  }
})
