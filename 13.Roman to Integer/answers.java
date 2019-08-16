// 110ms 
// 创建 hash 
public class Solution {
  public int romanToInt(String s) {
    HashMap<Character, Integer> pair = new HashMap<>();
    pair.put('I', 1);
    pair.put('V', 5);
    pair.put('X', 10);
    pair.put('L', 50);
    pair.put('C', 100);
    pair.put('D', 500);
    pair.put('M', 1000);
    int len = s.length();
    int sum = pair.get(s.charAt(len - 1));
    for (int i = 0; i < len - 1; i++) {
      if (pair.get(s.charAt(i)) < pair.get(s.charAt(i + 1))) {
        sum -= pair.get(s.charAt(i));
      } else {
        sum += pair.get(s.charAt(i));
      }
    }
    return sum;

  }
}



// 104ms  
import java.util.Hashtable;
public class Solution {
    public int romanToInt(String s) {
        // Hashtable pair = new Hashtable(); 不能这样写， 会报 “incompatible types: Object cannot be converted to int”  
        Hashtable<Character, Integer> pair = new Hashtable<>();
        pair.put('I',1);
        pair.put('V',5);
        pair.put('X',10);
        pair.put('L',50);
        pair.put('C',100);
        pair.put('D',500);
        pair.put('M',1000);
        int len = s.length();
        int sum = pair.get(s.charAt(len-1));
        for (int i=0;i<len-1;i++) {
            if (pair.get(s.charAt(i)) < pair.get(s.charAt(i+1))) {
                sum -= pair.get(s.charAt(i));
            } else {
                sum += pair.get(s.charAt(i));
            }
        }
        return sum;

    }
}

