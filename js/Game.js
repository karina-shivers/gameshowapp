/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const startScreen = document.getElementById('overlay')
const hearts = document.querySelectorAll('.tries')
const ul = phraseDiv.querySelector('ul')

class Game {
  constructor () {
    this.missed = 0
    this.phrases = [
      new Phrase('Better late than never'),
      new Phrase('Bite the bullet'),
      new Phrase('Cut somebody some slack'),
      new Phrase('Get out of hand'),
      new Phrase('Go back to the drawing board')
    ]
    this.activePhrase = null
  }

  
  getRandomPhrase () {
    const randomNumber = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[randomNumber]
  }

  
  startGame () {
    document.getElementById('overlay').style.display = 'none'
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }

  
  checkForWin () {
    let remainingLetters = 0
    for (let i = 0; i < ul.children.length; i++) {
      if (ul.children[i].className.includes('hide')) {
        remainingLetters++
      }
    }
    if (remainingLetters === 0) {
      return true
    }
  }

 
  removeLife () {
    this.missed += 1
    const heartIndex = hearts.length - this.missed
    if (this.missed < 5) {
      hearts[heartIndex].firstChild.src = 'images/lostHeart.png'
    } else {
      this.gameOver(false)
    }
  }


  gameOver (gameWon) {
    const message = document.getElementById('game-over-message')
    if (gameWon) {
      startScreen.style.display = ''
      startScreen.className = 'win'
      message.innerHTML = 'You win!'
    } else {
      startScreen.style.display = ''
      startScreen.className = 'lose'
      message.innerHTML = `You lose! The phrase was <em>"${this.activePhrase.phrase}"</em>`
    }
  }


  handleInteraction (button) {
    button.disabled = true
    if (this.activePhrase.phrase.includes(button.innerHTML)) {
      button.className += ' chosen'
      this.activePhrase.showMatchedLetter(button.innerHTML)
      if (this.checkForWin()) {
        this.gameOver(true)
      }
    } else {
      button.className += ' wrong'
      this.removeLife()
    }
  }

  resetGame (e) {
    this.missed = 0
    const hearts = document.getElementsByClassName('tries')

    for (let i = 0; i < hearts.length; i++) {
      hearts[i].firstElementChild.src = 'images/liveHeart.png'
    }
    const buttons = document.getElementsByClassName('key')
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('wrong')
      buttons[i].classList.remove('chosen')
      buttons[i].disabled = false
    }
    const phrase = document.querySelector('#phrase ul')
    phrase.innerHTML = ''
  }
}
