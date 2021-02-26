/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 2. 两数相加
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0,
    newVal = 0,
    sum = 0;
  let node1 = l1,
    node2 = l2;
  res = new ListNode(0, null);
  let curr = res;
  while (node1 || node2) {
    let node1Val = node1?.val || 0;
    let node2Val = node2?.val || 0;
    sum = node1Val + node2Val + carry;
    carry = Math.floor(sum / 10);
    newVal = sum % 10;
    let newNode = new ListNode(newVal, null);
    curr.next = newNode;
    if (node1) {
      node1 = node1.next;
    }
    if (node2) {
      node2 = node2.next;
    }
    curr = curr.next;
  }
  if (carry) {
    let newNode = new ListNode(carry, null);
    curr.next = newNode;
  }
  return res.next;
};
