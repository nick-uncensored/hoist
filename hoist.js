/*
console.log(myInstaId); // undefined

var myInstaId = 'indianDevJourney';

// test 2 with const keyword

console.log(myInstaId); // Reference Error: myInstaId is not defined

const myInstaId = 'indianDevJourney';

*/


// test 1 with function declaration

console.log(iAmAFunction); // [Function: iAmAFunction]

function iAmAFunction() { }

// test 2 with function expression

console.log(iAmAFunction); // undefined

var iAmAFunction = function () { }


function fnScope() {
    console.log(variableInsideFn); // undefined
    console.log(iAmDeclaredWithLet); // ReferenceError: iAmDeclaredWithLet is not defined

    var variableInsideFn = 'I am Inside a function';
    let iAmDeclaredWithLet = 'I am Inside a function';
}

fnScope();