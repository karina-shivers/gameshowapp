/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const phraseDiv = document.getElementById('phrase')


class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase()
  }

  addPhraseToDisplay () {
    const splitPhrase = this.phrase.split('')
    const phraseSection = document.getElementById('phraseSection')
    for (let i = 0; i < splitPhrase.length; i++) {
      if (splitPhrase[i] === ' ') {
        phraseSection.innerHTML += '<li class="space"> </li>'
      } else {
        phraseSection.innerHTML += `<li class="hide letter ${splitPhrase[i]}">${splitPhrase[i]}</li>`
      }
    }
  }

  
  checkLetter (letter) {
    if (this.phrase.includes(letter)) {
      this.showMatchedLetter(letter)
      return true
    } else {
      return false
    }
  }

 
  showMatchedLetter (letter) {
    const lettersInPhrase = ul.children
    for (let i = 0; i < lettersInPhrase.length; i++) {
      if (letter === lettersInPhrase[i].textContent) {
        lettersInPhrase[i].className = `show letter ${letter}`
      }
    }
  }
}
