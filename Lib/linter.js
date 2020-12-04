const Stack = require('../Stack.js');

const bracketsArray = ['(', ')', '[', ']', '{', '}']
const matchBrackets = {
    '(':')',
    '[':']',
    '{':'}',
    ')':'(',
    ']':'[',
    '}':'{'
}
const openingBrackets = ['(','[', '{']

const brackets = (item) => {

    return item
    .split('')
    .filter(item => bracketsArray.includes(item)) 
}


const looper = (array) => {
    const bracketStack = new Stack();
    let result = true

    array
    .map(bracket => {
        const peek = bracketStack.peek();
        if (
            openingBrackets.includes(bracket)) {
            bracketStack.push(bracket)
        } else {
            console.log(peek, bracket);
            if (matchBrackets[bracket] === peek){
                bracketStack.pop()
            } else {
                result = {
                    missing: matchBrackets[peek || bracket]
                }
            }
        }
    })
    return result
} 


const linter = (body) => {
    const bracketArr = brackets(body)
    console.log(bracketArr
    );
    const result = looper(bracketArr)
    if(result === true) {
        return {
            'success': true
        }
    } else return {
        'error': `missing ${result.missing}`
        
    }
}

const testLinter = linter('function add(a, b) {]return a + b;}')
console.log(testLinter);


module.exports = {
    linter
};


