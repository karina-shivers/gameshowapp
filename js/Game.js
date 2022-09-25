/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Don't put all your eggs in one basket"),
      new Phrase("Every cloud has a silver lining"),
      new Phrase("Get a taste of your own medicine"),
      new Phrase("Give someone the cold shoulder"),
      new Phrase("A dime a dozen"),
    ];
    this.activePhrase = null;
  }

  //  randomly retrieves one of the phrases stored 
    const randomPhrase = this.phrases[randomNumber];
    return randomPhrase;
  }

 
  startGame() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  //  checks to see if the player has revealed all of the letters
  checkForWin() {
    const letter = document.getElementsByClassName("hide");
    if (letter.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // -=[]' removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
  removeLife() {
    const TRIES = document.querySelectorAll(".tries img");
    TRIES[this.missed].src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

 
  gameOver(gameWon) {
    const OVERLAY = document.querySelector("#overlay");
    const GAMEOVERMESSAGE = document.querySelector("#game-over-message");
    const RESETBUTTON = document.querySelector("#btn__reset");
    OVERLAY.style.display = "";
    if (gameWon) {
      OVERLAY.className = "win";
      GAMEOVERMESSAGE.textContent = "You Win!";
      RESETBUTTON.textContent = "Play Again";
    } else {
      GAMEOVERMESSAGE.textContent = "You Lost!";
      OVERLAY.className = "lose";
      RESETBUTTON.textContent = "Let's Play Again!";
    }
  }



  handleInteraction(e) {
    if (this.activePhrase.checkLetter(e.textContent) === false) {
      e.classList.add("wrong");
      this.removeLife();
      console.log("wrong");
    } else if (this.activePhrase.checkLetter(e.textContent)) {
      e.classList.add("chosen");
      console.log("right");
      this.activePhrase.showMatchedLetter(e.textContent);
      this.checkForWin();
      if (this.checkForWin() === true) {
        this.gameOver(true);
      }
      if (this.missed > 4) {
        this.gameOver(false);
      }
    }
    e.disabled = true;
  }

 
  resetGame(e) {
    this.missed = 0;
    let hearts = document.getElementsByClassName("tries");

    for (let i = 0; i < hearts.length; i++) {
      hearts[i].firstElementChild.src = "../images/liveHeart.png";
    }
    let buttons = document.getElementsByClassName("key");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("wrong");
      buttons[i].classList.remove("chosen");
      buttons[i].disabled = false;
    }
    let phrase = document.querySelector("#phrase ul");
    phrase.innerHTML = "";
  }
}
