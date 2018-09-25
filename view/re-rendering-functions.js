const changeExistingCss = cssToUpdate => {
  const styles = document.head.querySelector('style')
  styles.innerHTML = cssToUpdate
}

const changeExistHtml = htmlToUpdate => {
  document.body.innerHTML = htmlToUpdate
}

module.exports.changeExistingCss = changeExistingCss
module.exports.changeExistHtml = changeExistHtml