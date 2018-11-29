const changeExistCss = cssToUpdate => {
  const styles = document.head.querySelector('style')
  styles.innerHTML = cssToUpdate
}

const changeExistHtml = htmlToUpdate => {
  document.body.innerHTML = htmlToUpdate
}

module.exports.changeExistCss = changeExistCss
module.exports.changeExistHtml = changeExistHtml