class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((p,i)=>[p,speed[i]])
        cars.sort((a,b)=> b[0] - a[0])

        let stack = []

        for (let index = 0;index<cars.length;index++){
            let p = cars[index][0]
            let s = cars[index][1]
            let time = (target - p) / s

            if (stack.length ==0 || time > stack[stack.length - 1]) stack.push(time)

        }
        return stack.length
    }
}
