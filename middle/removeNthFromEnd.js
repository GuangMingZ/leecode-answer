/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 19. 删除链表的倒数第 N 个结点
 * 1.计算链表长度n，然后遍历到n-N个节点进行删除
 * 2.栈，先进栈，然后出栈，连续出N个就为删除节点
 * 3.快、慢指针+哑节点，增加一个哑节点，然后快指针先走，慢指针落后N步
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