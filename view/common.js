let m = document.querySelector('#firstValue')
let n = document.querySelector('#secondValue')
let newM = document.querySelector('#thirdValue')
let newN = document.querySelector('#fourthValue')
let answer = document.querySelector('#answer')
const button = document.querySelector('#button')

const calculate = () => {
  const v1 = +m.value
  const v2 = +n.value
  const v3 = +newM.value
  const v4 = +newN.value

  const PA = v1 / v2
  const PB = v3 / v4

  return {
    definitionOfProbability: PA, // Определение вероятности события
    theProbabilityOfAnInconsistentEvent: PB, // Вероятность несовместного события
    probabilityOfTheOppositeEvent : 1 - PA, //Вероятность противоположного события
    probabilityOfTheSumOfInconsistentEvents: PA + PB, //Вероятность суммы несовместных событий
    probabilityOfTheProductOfIndependentEvents: PA * PB // Вероятность произведения независимых событий
  }
}

const render = () => {
  const arr = calculate()
  answer.innerHTML = `
    <span data='Определение вероятности события'>${arr.definitionOfProbability.toFixed(3)}</span>
    <span data='Вероятность несовместного события' >${arr.theProbabilityOfAnInconsistentEvent.toFixed(3)}</span>
    <span data='Вероятность противоположного события' >${arr.probabilityOfTheOppositeEvent.toFixed(3)}</span>
    <span data='Вероятность суммы несовместных событий' >${arr.probabilityOfTheSumOfInconsistentEvents.toFixed(3)}</span>
    <span data='Вероятность произведения независимых событий' >${arr.probabilityOfTheProductOfIndependentEvents.toFixed(3)}</span>
  `
}

button.addEventListener('click', render, false)
