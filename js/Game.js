/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [ 
            new Phrase(''),
            new Phrase(''),
            new Phrase(''),
            new Phrase(''),
            new Phrase('')];
        this.activePhrase = null;
    }

    // starts game
     startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
     }

    
     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
     }

    
    handleInteraction(letterPress) { 
        if (this.activePhrase.checkLetter(letterPress)) {
            letterPress.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letterPress.innerText);
            letterPress.disabled = true;
            if (this.checkForWin() === true) {
                this.gameOver();
            }
        } else {
            letterPress.classList.add('wrong');
            this.removeLife(letterPress);
            
        }
        
    }    
    removeLife (letterPress) {
        if (letterPress.disbled === false){
            letterPress.disabled = true;
            document.querySelectorAll('.tries img')[this.missed].src = 'images/lostHeart.png';
            this.missed++;
            if(this.missed >= 5) {this.gameOver}

        }
    } }
    checkForWin(); {
        return document.querySelectorAll('.hide').length === 0;
    }
    
    gameOver(); {

const overlay = document.getElementById('overlay');
let gameOvermsg = document.getElementById('game-over-message');
overlay.style.disply = 'flex';
if (this.checkForWin()=== true) {
    gameOvermsg.innerHTML = "";
    overlay.classList.add('win');
} else {
    gameOvermsg.innerHTML = "";
    overlay.classList.add('lose');
}
}
// resets the keyboard

Arrayfrom.document.getElementByClassname('key')).map(element => {
    element.classList.remove("wrong");
    element.classList.remove("chosen");
    element.disabled = false;
})
//resets the missed points 
this.missed = 0;
// Resets hearts
const hearts = document.querySelectorAll('.tries img');
for (let i=0; i<hearts.length;i++) {
    hearts[i].src = 'images/liveHeart.png'
}
