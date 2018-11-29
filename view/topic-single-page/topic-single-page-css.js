const renderSingleTopicCSS = () => {
  return `
    body {
      opacity: 1 !important;
      padding: 25px;
    }
    
    .container {
      width: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    
    h1 {
      margin-bottom: 25px
    }
    
    .inputs-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      min-height: calc(100vh - 244px)
    }
    
    .input-container {
      display: flex;
      align-items: center;
    }
    
    label {
      flex: 1;
    }
    
    input {
      flex: 7;
      padding: 5px 10px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #e6e6e6
    }
    
    .single-input {
      min-width: 100%;
      max-width: 100%;
    }
    
    .double-inputs {
      min-width: 45%;
      max-width: 45%;
    }
    
    .triple-inputs {
      min-width: 30%;
      max-width: 30%;
    }
    
    .multiple-inputs: {
      min-width: 45%;
      max-width: 45%;
    }
    
    .multiple-inputs:last-child: {
      min-width: 100%;
      max-width: 100%;
    }
    
    button {
      width: 20%;
      min-height: 50px;
      background-color: #66CC66;
      border: 1px solid #66CC66;
      color: white;
      font-size: 1em;
      cursor: pointer;
      margin-bottom: 50px;    
    }
  
    button:hover {
      background-color: #339933;
      border-color: #339933;
    }
    
    .answers-container {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
    }
    
    .formula-container {
      display: flex;
      flex: 1;
      box-sizing: border-box;
      align-items: center;
      padding: 0 5px;
    }
    
    .formula-title {
      margin-right: 10px;
      font-size: 0.75em;
    }
    
    .formula-field-container {
      display: flex;
      flex: 1;
      height: 30px;
      flex-direction: column;
      justify-content: space-between;
      }
      
    .formula-field {
      color: #fff;
      text-align: center;
    }
    
    .formula-underline {
      width: 100%;
      height: 2px;
      background-color: #000;
      border-radius: 5px;
    }
  `
}

module.exports.renderSingleTopicCSS = renderSingleTopicCSS