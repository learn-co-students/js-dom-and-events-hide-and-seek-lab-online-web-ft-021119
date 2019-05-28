function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested div div div .target')
}

//modify lis[i].innerHTML, don't need to return anything
function increaseRankBy(n){
  let lis = document.querySelectorAll('ul.ranked-list li');
  let array = []
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML,10) + n)
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}
