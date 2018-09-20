const container = document.querySelector('.container')
let stage = 'menu'
const topics = [
  {
    id: 0,
    title: 'Elementary formulas',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, reiciendis.'
  },
  {
    id: 1,
    title: 'Topic 2',
    desc: 'Description 2'
  },
  {
    id: 2,
    title: 'Topic 3',
    desc: 'Description 3'
  },
  {
    id: 3,
    title: 'Topic 4',
    desc: 'Description 4'
  },
  {
    id: 4,
    title: 'Topic 5',
    desc: 'Description 5'
  },
  {
    id: 5,
    title: 'Topic 6',
    desc: 'Description 6'
  },
  {
    id: 6,
    title: 'Topic 7',
    desc: 'Description 7'
  },
  {
    id: 7,
    title: 'Topic 8',
    desc: 'Description 8'
  },
  {
    id: 8,
    title: 'Topic 9',
    desc: 'Description 9'
  }
]

const loadTopics = (e) => {
  const button = e.target;
  destroyButton(button)
    .then(() => {
      if (!topics.length) {
        // TODO Make popup windows with error message
        alert('There is no topics saved :(')
        return
      }
      stage = 'topics'
      container.innerHTML = renderTopics()
    })
}

const destroyButton = (button) => {
  return new Promise(resolve => {
    button.style.animation = 'button-destroyer .25s linear'
    setTimeout(() => {
      container.style.justifyContent = 'flex-start'
      container.style.alignItems = 'flex-start'
      resolve()
    }, 250)
  })
}

const renderTopics = () => {
  let topicsList = ''
  topics.forEach((topic, index) => {
    topicsList += `
      <div class="topic" id="topic${topic.id}" style="animation: show-topics ${index / 10}s linear">
        <h3>${topic.title.indexOf('Topic') !== -1 ? topic.title + '<br>(Soon...)' : topic.title}</h3>
      </div>
    `
  })
  return topicsList
}