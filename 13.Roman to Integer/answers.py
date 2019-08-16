# 142ms 71.93%
# 倒序, 代码干净
class Solution(object):
    def romanToInt(self, s):
        pairs = {'M':1000, 'D':500, 'C':100, 'L':50, 'X':10, 'V':5, 'I':1}
        sum, prev = 0, 'I'
        for cur in s[::-1]:
            sum, prev = sum - pairs[cur] if pairs[cur] < pairs[prev] else sum + d[cur], cur
        return sum
        

# 122ms 98.54%
# 不倒序, 性能提升
class Solution(object):
    def romanToInt(self, s):
        pairs = {'M':1000, 'D':500, 'C':100, 'L':50, 'X':10, 'V':5, 'I':1}
        sum, prev = 0, "M"
        for cur in s:
            if pairs[prev] < pairs[cur]: sum -= 2*pairs[prev] 
            sum = sum + pairs[cur]
            prev = cur
        return sum