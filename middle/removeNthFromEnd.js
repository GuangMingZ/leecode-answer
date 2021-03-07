/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let fast = head,
      slow = head;
    while (n-- && fast) {
      fast = fast.next;
    }
    if (!fast && n > 0) {
      return fast;
    } else if (!fast && n <= 0) {
      return head.next;
    }
    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    return head || slow || fast;
  };  