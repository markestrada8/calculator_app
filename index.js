const buttons = document.querySelectorAll('.button')
console.log(buttons)

let dataToDisplay = ''

const displayValue = (event) => {
  const display = document.querySelector('.answer')
  const newData = event.target.innerText
  if (newData === "=") {
    display.innerText = String(eval(dataToDisplay))
    dataToDisplay = ""
  } else {
    dataToDisplay += newData
    console.log(event.target.innerText)
    console.log(dataToDisplay)
    display.innerText = dataToDisplay
  }


}

buttons.forEach(button => {
  button.addEventListener('click', displayValue)
})