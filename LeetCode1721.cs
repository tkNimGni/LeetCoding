/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode SwapNodes(ListNode head, int k) {
        var nodeA = head;
        var node = head;
        var count = 0;
        while (node != null) {
            count++;
            if (count == k) {
                nodeA = node;
            }
            node = node.next;
        }
        
        var b = count - k + 1;
        var nodeB = head;
        node = head;
        count = 0;
        while (node != null) {
            count++;
            if (count == b) {
                nodeB = node;
                break;
            }
            node = node.next;
        }

        var temp = nodeA.val;
        nodeA.val = nodeB.val;
        nodeB.val = temp;
        
        return head;
    }
}
