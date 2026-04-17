class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var eString = ''
        for(var index = 0;index<strs.length;index++){
            eString+=strs[index].length
            eString+='#'
            eString+=strs[index]
        }
        return eString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        var dString = []
        var index = 0
        while(index<str.length){
            let slashIndex = str.indexOf('#',index)
            let wordLength = parseInt(str.slice(index,slashIndex))
            let word = str.substring(slashIndex + 1, slashIndex + wordLength +1)
            dString.push(word)
            index = slashIndex+wordLength+1
        }
        return dString
    }
}
