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
  let nodes =  document.querySelector("div#grand-node")
  for (let i = 0; i < nodes.length; i++){
    child = nodes.querySelector(div)
      if (child) {
        child.child
      }
  }
}


//   Tree.prototype.traverse = function (callback) {
//   var queue=[this];
//   var n;
//
//   while(queue.length>0) {
//
//     n = queue.shift();
//     callback(n.value);
//
//     if (!n.children) {
//       continue;
//     }
//
//     for (var i = 0; i< n.children.length; i++) {
//        queue.push(n.children[i]);
//     }
//   }
// };




// function deepestChild(){
//   let nodes =  document.querySelectorAll("div#grand-node")
//   let deepest = nodes[nodes.length- 1];
// }
// =>  AssertionError: expected { Object () } to equal { Object () }
