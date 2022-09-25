/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // loops over the letters
    const phraseDiv = document.querySelector("#phrase ul");
    const phraseArray = this.phrase.split("");
    phraseArray.forEach((letter) => {
      const li = document.createElement("li");
      li.textContent = letter;
      if (letter !== " ") {
        li.className = `hide letter ${letter}`;
      } else {
        li.className = "space";
      }
      phraseDiv.appendChild(li);
    });
  }

  //  checks to see if the letter selected by the player 
  checkLetter(letter) {
    const phraseArray = this.phrase.split("");
    if (phraseArray.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  //  checks to see if the player has revealed all of the letters 
  showMatchedLetter(letter) {
    const selectedPhrase = document.getElementById("phrase");
    const childOfPhrase = selectedPhrase.firstElementChild;
    const liLetters = childOfPhrase.getElementsByTagName("li");
    for (let i = 0; i < liLetters.length; i++) {
      if (liLetters[i].textContent === letter) {
        liLetters[i].classList.replace("hide", "show");
      }
    }
  }
}
