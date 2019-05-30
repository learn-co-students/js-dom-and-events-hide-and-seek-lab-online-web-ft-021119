function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let nodes = document.querySelectorAll( '#grand-node div' );

  return nodes[nodes.length - 1];
}

function increaseRankBy(n) {
  let nodes = document.querySelectorAll('.ranked-list li'), i;

  for (i = 0; i < nodes.length; ++i ) {
    let originalNumber = ( parseInt(nodes[i].textContent) );
    let newNumber = originalNumber + n;
    
    nodes[i].textContent = newNumber;
  }
}
