Reverse a singly linked list.

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 ```
### js 

**iteratively twice:**

```js
var reverseList = function(head) {
    if (head === null) return head
    var arr = []
    while (head !== null){
        arr.push(head.val)
        head = head.next
    }
    arr.reverse()
    var ret = {}
    var pos = ret
    for (var i in arr) {
        pos.next = new ListNode(arr[i])
        pos = pos.next
    }
    return ret.next
};  
```

**iteratively once:**

```js
var reverseList = function(head) {
    var ret = null
    pos = null
    while (head !== null){
        pos = head
        head = head.next
        pos.next = ret
        ret = pos
    }
    return ret
};
```
**recursive:**

```js
var reverseList = function(head, last) {
    // init in first 
    if (!last) last = null

    var curr;
    if (head !== null){
        curr = head
        head = head.next
        curr.next = last
    } else {
        // run thin only when first recurence, head is empty
        curr = null
    }
    return head ? reverseList(head, curr) : curr
};
```

### python

```py
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        
        ret = None
        pos = None
        while head:
            pos = head
            head = head.next
            pos.next = ret
            ret = pos
        return ret
```
### ruby
**iteratively**
```rb
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
    ret = nil
    pos = nil
    while head do
        pos = head
        head = head.next
        pos.next = ret
        ret = pos
    end
    return ret
    
end
```
**recursive:**
```rb
def reverse_list(head, _rev = nil)
    if head
      _new = ListNode.new(head.val)
      _new.next = _rev
    end
    head ? reverse_list(head.next, _new) : _rev
end
```
