Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

**Note:**
Could you optimize your algorithm to use only O(k) extra space?
 
```js
function getRow (row) {
    var arr = []
    for (var i = 0; i <= row; i++) {
        arr[i] = getIdx(row, i)
    }
    return arr
}
function getIdx (row, idx) {
    if (row==0 || row == idx || idx ==0){
        return 1
    } else {
        var lastRow = row == 0 ? 0 : --row
        return getIdx(lastRow, idx-1) + getIdx(lastRow, idx)
    }
}
```

```js
 function getRow (rowIndex) {
    if(rowIndex === 0){
        return [1];
    }else if(rowIndex === 1){
        return [1, 1];
    }

    var n = rowIndex - 1;
    var row = [1, 1];
    while(n--){
        for(var i = row.length - 1; i >= 1; i--){
            row[i] = row[i] + row[i - 1];
        }
        row.push(1);
    }
    return row;
}
```
**第一种的运行效率是第二种的指数倍
