class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let minPrice=Infinity
      let maxProfit=0
      for(let price of prices)
      {
        minPrice=Math.min(price,minPrice)
        let profit=price-minPrice
        maxProfit=Math.max(profit,maxProfit)
      }
      return maxProfit
    }
}
