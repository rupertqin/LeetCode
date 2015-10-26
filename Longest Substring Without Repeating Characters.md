Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
### js
```js
 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
};
 ```
```js
var lengthOfLongestSubstring = function(s) {
    var str = ''
    var len = 0
    for (var i in s) {
        var prevIdx = str.indexOf(s[i])
        
        if (prevIdx === -1) {
            str += s[i]
            if (str.length > len) len = str.length
        } else {
            if (str.length > len) len = str.length
            str = str.slice(prevIdx+1) + s[i]
        }
    }
    return len
};

```
