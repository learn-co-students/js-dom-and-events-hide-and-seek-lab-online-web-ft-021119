

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
    let listItems;
    listItems = document.querySelectorAll('ul.ranked-list li')
    for (let i = 0; i < listItems.length; i++) { 
        listItems[i].innerHTML = (parseInt(listItems[i].innerHTML)) + n
        
    }
}