function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  let ranked = document.getElementsByClassName('ranked-list')
  for (let i = 0; i < ranked.length; i++){
    ranked[i].innerHTML = (i + 1)
  }
}


function deepestChild(){
  let nodes =  document.getElementById("grand-node").querySelectorAll("div")
  return nodes[nodes.length- 1];
}
