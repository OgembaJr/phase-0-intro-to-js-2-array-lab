// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    destructivelyAppendCat = cats.push('Ralph')
}
 
function destructivelyPrependCat(){
    destructivelyPrependCat = cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    destructivelyRemoveLastCat = cats.pop()
}

function destructivelyRemoveFirstCat(){
    destructivelyRemoveFirstCat = cats.shift()
}

function appendCat(){
    const appendCat = cats.slice()
    appendCat.push('Ralph')

}

function prependCat(){
    const prependCat = cats.slice()
    prependCat.unshift('Bob')
}

function removeLastCat(){
    removeLastCat = cats.slice(2)
}
function removeFirstCat(){
    removeFirstCat = cats.slice(1)
}