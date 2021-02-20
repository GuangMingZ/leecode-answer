/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * 234. 回文链表
 */
var isPalindrome = function (head) {
  if (!head) {
    return true;
  }
  let nodes = [];
  let temp = head;
  while (temp) {
    nodes.push(temp.val);
    temp = temp.next;
  }
  let start = 0,
    end = nodes.length - 1;
  while (start <= end) {
    if (nodes[start] !== nodes[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
