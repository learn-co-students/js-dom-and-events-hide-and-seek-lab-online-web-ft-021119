function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('.target');
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = n + parseInt(ranks[i].innerHTML);
  }
  return ranks;
}

function deepestChild() {
  const temp = document.getElementById("grand-node").querySelectorAll("div");
  return temp[temp.length - 1];
}
