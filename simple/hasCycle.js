/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 141. 环形链表
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  let next = head,
    nextNext = head;
  while (next && nextNext) {
    next = next.next;
    nextNext = nextNext.next?.next;
    if (next && nextNext && next == nextNext) {
      return true;
    }
  }
  return false;
};
