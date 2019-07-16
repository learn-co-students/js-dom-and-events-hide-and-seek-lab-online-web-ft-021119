function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
   const rankedLists = document.querySelectorAll('ul.ranked-list li')
   for (let el of rankedLists) {
      el.innerHTML = parseInt(el.innerHTML) + n
   }
   return rankedLists
}

 function deepestChild() {
   const deepest = document.getElementById('grand-node').querySelectorAll('div')
   return deepest[deepest.length - 1]
}
