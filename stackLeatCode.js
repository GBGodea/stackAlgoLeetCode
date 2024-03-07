'use strict';

function isValid(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else {
            if(stack.length > 0 && stack[stack.length - 1] === "(" && s[i] === ")" || stack[stack.length - 1] === "[" && s[i] === "]" || stack[stack.length - 1] === "{" && s[i] === "}") {
                stack.pop();
            } else {
                return false;
            }
        }
        

        
        
    }

    return !(stack.length > 0) ;

    
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([{}]())"));
console.log(isValid("["));
console.log(isValid("]"));
console.log(isValid("(])"));
