You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

### js:

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
var addTwoNumbers = function(l1, l2) {
    var ret = {}
    var tmp = ret
    var val = 0
    while(l1!==null || l2!== null || val > 0){
        if(l1!==null) { val += l1.val; l1 = l1.next}
        if(l2!==null) {val += l2.val; l2 = l2.next}
        tmp.next = new ListNode(0)
        tmp = tmp.next
        tmp.val = val%10
        val = val >=10 ? 1 : 0

    }
    return ret.next
};
```


```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

def addTwoNumbers(self, l1, l2):
    dummy = cur = ListNode(0)
    carry = 0
    while l1 or l2 or carry:
        if l1:
            carry += l1.val
            l1 = l1.next
        if l2:
            carry += l2.val
            l2 = l2.next
        cur.next = ListNode(carry%10)
        cur = cur.next
        carry //= 10
    return dummy.next
```
