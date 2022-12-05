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

  }


}