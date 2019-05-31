function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');

  for (let el of lis) {
  el.innerHTML = parseInt(el.innerHTML) + n;
  }

  return lis
}

function deepestChild() {
  const deepNode = document.getElementById('grand-node').querySelectorAll('div')
  return deepNode[deepNode.length - 1]
}
