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

function appendCat(name){
    const copyAppendCat= cats.slice()
    copyAppendCat.push(name)
    return copyAppendCat;
}

function prependCat(name){
    const copyPrependCat = cats.slice()
    copyPrependCat.unshift(name)
    return copyPrependCat;
}

function removeLastCat(){
    const copyRemoveLastCat = cats.slice()
    copyRemoveLastCat.pop();
    return copyRemoveLastCat;
}
function removeFirstCat(){
    const copyRemoveFirstCat = cats.slice()
    copyRemoveFirstCat.shift();
    return copyRemoveFirstCat;
}