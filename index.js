function getFirstSelector(selector) {
   return document.querySelector(selector)
}

function nestedTarget() {
   return document.querySelector('#nested .target')
}

function deepestChild() {
   const deepest = document.getElementById('grand-node').querySelectorAll('div')
   return deepest[deepest.length - 1]
}

const callbackFunc = function (el) {
   el.innerHTML = `${parseInt(el.innerHTML) + n}`
}

function increaseRankBy(n) {
   const rankedLists = document.querySelectorAll('ul.ranked-list li')
   for (let el of rankedLists) {
      el.innerHTML = parseInt(el.innerHTML) + n
   }
   return rankedLists
}