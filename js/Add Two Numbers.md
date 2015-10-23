You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

```js
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
