class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // input is array of char/tokens
        // output is the coagulated sum integer
        // for postfix notation 23+5- = (2+3) - 5
        // we can put the operands in the stack and when we encounter the operator we pop out the operatds and perform said calcuation
        // edge cases - no tokens , invalid postfix expressoin like double operands or like double digits
        let stack = []
        let operators = new Set(['+', '-', '*', '/'])
        let result = 0
        for(let index = 0; index<tokens.length; index++){
            if (operators.has(tokens[index])){
                let secondOp = parseInt(stack.pop())
                let firstOp = parseInt(stack.pop())
                switch(tokens[index]){
                    case '+':
                        result = firstOp + secondOp
                        stack.push(result)
                        break
                    case '-':
                        result = firstOp - secondOp
                        stack.push(result)
                        break
                    case '*':
                        result = firstOp * secondOp
                        stack.push(result)
                        break
                    case '/':
                        result = Math.trunc(firstOp / secondOp)
                        stack.push(result)
                        break
                }
            }
            else{
                stack.push(tokens[index])
            }
        }
        return stack.pop()
    }
}
