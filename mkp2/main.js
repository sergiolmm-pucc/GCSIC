// -------------------------------------------- //
// ******************************************** //
// * DAVID MEGUIMI CINJO PRODUÇÕES E MIXAGENS * //
// ******************************************** //
// -------------------------------------------- //


const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const costInput = document.getElementById('costInput')
const saleInput = document.getElementById('saleInput')
const markupText = document.getElementById('markupText')

const calculateMarkup = () => {
  const cost = costInput.value
  const sale = saleInput.value

  if(!cost || !sale) {
    markupText.innerHTML = formatter.format(0)
    return
  }

  const result = markup(cost, sale)
  markupText.innerHTML = formatter.format(result)
}

calculateMarkup()

costInput.addEventListener('input', calculateMarkup)
saleInput.addEventListener('input', calculateMarkup)