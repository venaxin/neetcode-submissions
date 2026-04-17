class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity
        let profit = 0
        let maxProfit = 0
        prices.forEach((price)=>{
            profit =  price - minPrice
            if (price<minPrice){
                minPrice = price
            } 
            if (profit> 0 && profit> maxProfit){
                maxProfit = profit
            }
        })
        return maxProfit
    }
}
