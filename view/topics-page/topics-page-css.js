const renderTopicsCSS = () => {
  return `
    body {
      opacity: 1 !important;
      padding: 0;
    }
    
    .container {
      width: 100%;
      min-height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      position: relative;
    }
    
    .topic {
      width: calc(100% / 3);
      min-width: calc(100% / 3);
      min-height: 33.3vh;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 5%;
    }
    
    .topic h3 {
      text-align: center;
    }
    
    .topic:hover {
      background-color: rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
    
    .topic:hover h3 {
      font-size: 1.25em;
    }
    
    @keyframes show-topics {
      from {
        opacity: 0;
        transform: scale(0.5);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `
}

module.exports.renderTopicsCSS = renderTopicsCSS