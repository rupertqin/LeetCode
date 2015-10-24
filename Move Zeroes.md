Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

### js

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0
    for (var i=0, len = nums.length; i<len,count < len; i++) {
        if (nums[i] === 0 ) {
            nums.push( nums.splice(i,1)[0] )
            i--;
        }
        count ++
    }

};
```

### ruby

```ruby
# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
    count = nums.count(0)
    nums.delete(0)
    nums.concat(Array.new(count, 0))
end
```

### python
```py
def moveZeroes(self, nums):
    for x in nums:
        if x ==0: 
            nums.remove(x)
            nums.append(0)
