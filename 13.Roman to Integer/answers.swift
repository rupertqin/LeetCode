class Solution {
    func romanToInt(_ s: String) -> Int {
        var pairs = [
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
            
        ]
        var sLen = s.characters.count
        var sArr = s.characters.map { String($0) }
        var sum = pairs[sArr[sLen-1]]
        if (sLen == 1) {
            return sum!
        }
        for i in 1...(sLen-1) {
            var cur:Int? = pairs[sArr[i]] 
            var prev:Int? = pairs[sArr[i-1]] 
            if prev! < cur! {
                sum! = sum! - prev!
            } else {
                sum! = sum! + prev!
            }
        }
        return sum!
    }
}