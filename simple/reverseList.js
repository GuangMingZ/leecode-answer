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
 * 206. 反转链表
 */
var reverseList = function (head) {
  if (!head) {
    return null;
  }
  let nodes = [];
  while (head) {
    nodes.push(head);
    head = head.next;
  }
  for (let i = nodes.length - 1; i >= 0; i--) {
    if (i === 0) {
      nodes[i].next = null;
    } else {
      nodes[i].next = nodes[i - 1];
    }
  }
  return nodes.pop();
};

var reverseList = function (head) {
  if (!head) {
    return head;
  }
  let prev = null,
    curr = head;
  while (curr) {
    let temp = curr;
    curr = curr.next;
    temp.next = prev;
    prev = temp;
  }
  return prev;
};
