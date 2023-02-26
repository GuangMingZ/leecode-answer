/**
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * 输入：head = [1,1,2]
   输出：[1,2]
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 快慢指针法
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  let slow = head;
  let fast = head.next;
  while(slow !== null || fast !== null) {
    while(fast!== null && slow.val === fast.val) {
        fast = fast.next;
    }
    slow.next = fast;
    slow = slow.next;
  }
  return head;
};
