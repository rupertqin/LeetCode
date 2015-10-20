Given a pattern and a string str, find if str follows the same pattern.

### Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
### Notes:
patterncontains only lowercase alphabetical letters, and str contains words separated by a single space. Each word in str contains only lowercase alphabetical letters.
Both pattern and str do not have leading or trailing spaces.
Each letter in pattern must map to a word with length that is at least 1.

```js
var wordPattern = function(pattern, str) {
    var arr = str.split(/\s+/);
    if (pattern.length !== arr.length) return false;
    var o = {};
    var v = {};
    for (var i = 0, k, len = pattern.length; i < len; i++) {
        k = pattern[i];
        mv = k+arr[i]
        if (!o[k]) {
            o[k] = mv;
            if ( v[arr[i]] && v[arr[i]] !== k)
                return false
            else
                v[arr[i]] = k

        } else {
            if (o[k] !== mv) 
                return false
        }
        
        
    }
    return true;
};
    console.log(wordPattern("e", "efdsf"))
    console.log(wordPattern("ab", "dog dog"))
    console.log(wordPattern("abba", "cat dog dog  cat"))
    console.log(wordPattern("abba", "cat dog dog cat"))
    console.log(wordPattern("abba", "dog dog dog dog"))
    console.log(wordPattern("aa", "aa aa aa"))
```
