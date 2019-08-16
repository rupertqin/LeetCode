# @param {String} s
# @return {Integer}
# 162ms 70.59%
def roman_to_int(s)
    pairs = { 'I'=> 1, 'V'=> 5, 'X'=> 10, 'L'=> 50, 'C'=> 100, 'D'=> 500, 'M'=> 1000 }
    prev = "M"
    sum = 0
    s.each_char { |cur|
        sum -= 2*pairs[prev] if pairs[prev] < pairs[cur] 
        sum = sum + pairs[cur]
        prev = cur
    }
    return sum
end