/*
// Definition for a Node.
public class Node {
    public int val;
    public Node next;
    public Node random;
    
    public Node(int _val) {
        val = _val;
        next = null;
        random = null;
    }
}
*/

public class Solution {
    private Dictionary<Node, Node> dic = new Dictionary<Node, Node>();
    
    public Node CopyRandomList(Node head) {
        if (head == null) {
            return null;
        }
        
        var newHead = new Node(head.val);
        dic[head] = newHead;
        
        if (head.next != null) {
            newHead.next = CopyRandomList(head.next);
        }
        
        if (head.random != null) {
            newHead.random = dic.ContainsKey(head.random) ? dic[head.random] : CopyRandomList(head.random);
        }
        
        return newHead;
    }
}
