

const getFirstSelector = function (selector) {
    return document.querySelector(selector)
}

const nestedTarget = function() {
    return document.querySelector( '#nested .target' )
}

const deepestChild = function() {
    return document.querySelector('#grand-node div div div div')
}

const increaseRankBy = function(n) {
    let list;
    list = document.querySelector('.ranked-list')
    for (i of list) { 
        return i + n;
}
}