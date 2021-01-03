function rollDice() {
  var p1 = document.querySelector(".p-1 i")
  var p2 = document.querySelector(".p-2 i")
  var btn = document.querySelector(".btn")


  var randomP1 = Math.floor((Math.random() * 6)) + 1
  if (randomP1 === 1) {
    p1.removeAttribute("class", "fas fa-dice-one")
    p1.setAttribute("class", "fas fa-dice-one")
  } else if (randomP1 === 2) {
    p1.removeAttribute("class", "fas fa-dice-one")
    p1.setAttribute("class", "fas fa-dice-two")
  } else if (randomP1 === 3) {
    p1.removeAttribute("class", "fas fa-dice-one")
    p1.setAttribute("class", "fas fa-dice-three")
  } else if (randomP1 === 4) {
    p1.removeAttribute("class", "fas fa-dice-one")
    p1.setAttribute("class", "fas fa-dice-four")
  } else if (randomP1 === 5) {
    p1.removeAttribute("class", "fas fa-dice-one")
    p1.setAttribute("class", "fas fa-dice-five")
  } else if (randomP1 === 6) {
    p1.removeAttribute("class", "fas fa-dice-one")
    p1.setAttribute("class", "fas fa-dice-six")
  }

  var randomP2 = Math.floor((Math.random() * 6)) + 1
  if (randomP2 === 1) {
    p2.removeAttribute("class", "fas fa-dice-six")
    p2.setAttribute("class", "fas fa-dice-one")
  } else if (randomP2 === 2) {
    p2.removeAttribute("class", "fas fa-dice-six")
    p2.setAttribute("class", "fas fa-dice-two")
  } else if (randomP2 === 3) {
    p2.removeAttribute("class", "fas fa-dice-six")
    p2.setAttribute("class", "fas fa-dice-three")
  } else if (randomP2 === 4) {
    p2.removeAttribute("class", "fas fa-dice-six")
    p2.setAttribute("class", "fas fa-dice-four")
  } else if (randomP2 === 5) {
    p2.removeAttribute("class", "fas fa-dice-six")
    p2.setAttribute("class", "fas fa-dice-five")
  } else if (randomP2 === 6) {
    p2.removeAttribute("class", "fas fa-dice-six")
    p2.setAttribute("class", "fas fa-dice-six")
  }


  if (randomP1 > randomP2) {
    btn.innerHTML = "<h1><i class='fas fa-flag'></i> Player 1 Won!</h1>"
  } else if (randomP1 < randomP2) {
    btn.innerHTML = "<h1><i class='fas fa-flag'></i> Player 2 Won!</h1>"
  } else if (randomP1 === randomP2) {
    btn.innerHTML = "<h1>You both Lost!</h1>"
  }

}
