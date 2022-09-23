/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase){
        this.phrase  = phrase.toLowerCase();
    }
}

addPhraseToDisplay () {
    document.querySelector('#phrase ul').innerHTML  = '';
    document.querySelector('#phrase ul').insertAdjacentHTML("beforeend",
        Array.from(this.phrase).map(letter => {
            if(letter === ' ') {
                return `<li class="space"> </li>`
            } else {
                return `<li class="hide letter ${letter}">${letter}</li>`
            }
        }).join('')
    ) 
}
checkLetter(letterPress) {
    return (this.phrase.includes(letterPress.innerText || letterPress.key))
}
showMatchedLetter(letter) {
    Array.from(document.getElementsByClassName(letter)).map(element => {
        element.classList.add("show"); 
        element.classList.remove("hide");
    })
}
