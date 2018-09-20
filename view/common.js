let m = null
let n = null
let newM = null
let newN = null
let array = null
let answer = document.getElementById('answer')

function my(){
  m = +document.getElementById('firstValue').value
  n = +document.getElementById('secondValue').value
  newM = +document.getElementById('thirdValue').value
  newN = +document.getElementById('fourthValue').value

  const PA = m / n
  const PB = newM / newN

  array = {
    definitionOfProbability: PA, // Определение вероятности события
    theProbabilityOfAnInconsistentEvent: PB, // Вероятность несовместного события
    probabilityOfTheOppositeEvent : 1 - PA, //Вероятность противоположного события
    probabilityofTheSumOfInconsistentEvents: PA + PB, //Вероятность суммы несовместных событий
    probabilityOfTheProductOfIndependentEvents: PA * PB, // Вероятность произведения независимых событий
  }
  return array
}


button.addEventListener('click', ()=> {my()}, false)
button.addEventListener('click', ()=> {mytoo()}, false)


function mytoo(){
  answer.innerHTML = `
<span data='Определение вероятности события'>${array.definitionOfProbability.toFixed(3)}</span>
<span data='Вероятность несовместного события' >${array.theProbabilityOfAnInconsistentEvent.toFixed(3)}</span>
<span data='Вероятность противоположного события' >${array.probabilityOfTheOppositeEvent.toFixed(3)}</span>
<span data='Вероятность суммы несовместных событий' >${array.probabilityofTheSumOfInconsistentEvents.toFixed(3)}</span>
<span data='Вероятность произведения независимых событий' >${array.probabilityOfTheProductOfIndependentEvents.toFixed(3)}</span>
`
}



// const result = `
//   <span></span>
// `
