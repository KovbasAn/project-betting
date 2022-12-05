const resultCell = document.querySelector('.result')
const resultBtn = document.querySelector('button')
const betCells = document.querySelectorAll('.bet')
const pointCells = document.querySelectorAll('.points')

resultBtn.onclick = handleResults

function handleResults() {
  // generate and show result
  const result = `${generate()} : ${generate()}`
  resultCell.innerText = result

  // watch for each bet
  for (let i = 0; i < betCells.length; i++) {
    const cell = betCells[i]
    const bet = cell.innerText

    // calculate points
    const points = calcPoints(result, bet)
    pointCells[i].innerText = points
  }
}

function generate() {
  return Math.floor(Math.random() * 10)
}

function calcPoints(result, bet) {  
  if (result === bet) {
    return 5
  }

  result = result.split(' : ')
  bet = bet.split(' : ')
  const resultSign = Math.sign(result[0] - result[1])
  const betSign = Math.sign(bet[0] - bet[1])
  
  if (resultSign === betSign) {
    return 2
  }
  
  return 0  
}