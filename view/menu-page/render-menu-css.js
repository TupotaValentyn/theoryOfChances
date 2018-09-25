const renderMenuCSS = () => {
  return `
    body {
      opacity: 1 !important;
      padding: 0;
    }
    
    .container {
      width: 100%;
      min-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      position: relative;
    }
    
    @keyframes button-destroyer {
      from {
        transform: scale(1);
        opacity: 1;
      }
      to {
        transform: scale(3);
        opacity: 0;
      }
    }
  `
}

module.exports.renderMenuCSS = renderMenuCSS