function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function increaseRankBy(n) {
  const increase = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < increase.length; i++) {
    increase[i].innerHTML = parseInt(increase[i].innerHTML) + n
    // parseInt(increase[i].innerHTML) += n

  }
}


function deepestChild() {
  let grandNode = document.querySelector('#grand-node')
  //grab first child node and add to grandnode
  //then update grandNode to include this child
  //do above until no children are leff
  //then return grandNode

  let childNode = grandNode.children[0] //the index of childnode
  while (childNode) {
    grandNode = childNode
    childNode = grandNode.children[0]
  }
  return grandNode

}
