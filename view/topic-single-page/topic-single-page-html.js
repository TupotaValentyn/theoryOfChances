const renderSingleTopicHTML = (topic) => {
  console.log(topic)
  return `
    <div class="container">
      <h1>${topic.name}</h1>
      <div class="inputs-container">
        ${renderInputs(topic.inputs)}
      </div>
      <button onclick="calculateValues()">Calculate</button>
      <div class="answers-container">
        ${renderAnswersFields(topic.formulas)}
      </div>
    </div>
  `
}

const renderInputs = inputs => {
  let inputsList = ''
  const inputStyle = inputs.length === 1
    ? 'single-input' : inputs.length % 2 === 0
      ? 'double-inputs' : inputs.length % 3 === 0
        ? 'triple-inputs' : 'multiple-inputs'
  inputs.forEach(input => inputsList += (
    `<div class="input-container ${inputStyle}">
      <label for="input${input.id}">${input.name}</label>
      <input type="text" id="input${input.id}">
    </div>`
  ))
  return inputsList
}

const renderAnswersFields = (formulas) => {
  let answersFieldsList = ''
  formulas.forEach((formula, index) => {
    answersFieldsList += `
      <div class="formula-container">
        <span class="formula-title">${formula.name}</span>
        <div class="formula-field-container">
          <span class="formula-field" id="formula-field-${index}"></span>
          <span class="formula-underline"></span>
        </div>
      </div>
    `
  })
  return answersFieldsList
}

module.exports.renderSingleTopicHTML = renderSingleTopicHTML