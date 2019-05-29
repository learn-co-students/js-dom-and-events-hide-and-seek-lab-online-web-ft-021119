function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}

function increaseRankBy(n) {
  let newLis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let num = 0; num < newLis.length; num++) {
    newLis[num].innerHTML = (parseInt(newLis[num].innerHTML,10) + n).toString();
  }
  return newLis;
}
