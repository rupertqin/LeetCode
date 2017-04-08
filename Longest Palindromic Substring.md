
## 暴力破解法 (650ms)
```js
function isPal(s, m, l) {
    for ( var i=0; i<Math.floor(l/2); i++ ) {
        if (s[m+i] !== s[m+l-1-i]) {
            return false
        }
    }
    return true
}

var longestPalindrome = function(s) {
    var len = s.length
    if(len<=1) return s
    
    // 从最大长度开始，只要成功匹配就返回最终结果
    for (var l=len;l>0;l--) {
        for (var m=0;m<=len-l;m++) {
            if ( isPal(s, m, l) ) {
                return s.slice(m, m+l)
            }
        }
    }
    return s[0]
};
```

## 奇偶两边扩展
```js
var longestPalindrome = function(s) {
  var result = [0,0];
  for (var i = 0; i < s.length; i++) {
  
    // 分奇偶两个情况
    for (var oddEven = 0; oddEven < 2; oddEven++) {
      var left = i;
      var right = i + oddEven;
      while (s[left] && s[left] === s[right]) {
        // 向两边扩展，直到左右不等的那一步
        left--;
        right++;
      }
      
      // 跟最大开度值比较，如果大于等于2，则取最新值 （这里不能用大于等于或大于等于1， ）
      if (right - left - 2 >= result[1] - result[0]) {
      
        // 左右各向后缩一步，因为前端 left--; right++ 会到不成立的那一步
        result = [left+1, right-1]
      }
    }
  }
  return s.substring(result[0], result[1]+1)
};
```

## 不分奇偶，优先匹配重复字母

把字符串分为两个情况：
1、 中间一跎， 如 "abcccccccbae"
2、 "abcdefgfedcba"

```js
var longestPalindrome = function(s) {
  var head,
  	tail,
    i,
    len = s.length,
    count,
    maxCount = 0,
    offset,
    result = [-1, -1];
  
  for (i = 0; i < len; i++) {
    head = i;
    while (i < len - 1 && s.charAt(i) === s.charAt(i+1)) {
      i++;
    }
    tail = i;
    count = tail - head + 1;
    
    for (offset = 1; offset <= Math.min(head, len - tail - 1); offset++) {
      if (s.charAt(head - offset) === s.charAt(tail + offset)) {
        count += 2;
      } else {
        break;
      }
    } 
    if (count > maxCount) {
      result[0] = head - offset + 1;
      result[1] = tail + offset - 1;
      maxCount = count;
    }
  }
  
  return s.substring(result[0], result[1] + 1);
};
```
