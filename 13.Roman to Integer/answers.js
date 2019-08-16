/**
 * @param {string} s
 * @return {number}
 */

// 208ms, 
var romanToInt = function(s) {
    var pairs = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    var len = s.length
    var sum = pairs[s[len-1]]
    for (var i=1;i<len;i++) {
        var cur = pairs[s[i]] 
        var prev = pairs[s[i-1]] 
        if (prev < cur) {
            sum -= prev
        } else {
            sum += prev
        }
    }
    return sum
};


// 一直加，遇到前面比后面小的减两遍
// 199ms, 90.42%
var romanToInt = function(s) {
    var pairs = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    var sum = 0
    var prev = "M"
    for (var cur of s) {
      if (pairs[prev] < pairs[cur]) sum -= 2*pairs[prev]
      sum = sum + pairs[cur]
      prev = cur
    }
    return sum
};