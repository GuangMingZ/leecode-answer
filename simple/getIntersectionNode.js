/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 160. 相交链表
 */
var getIntersectionNode = function (headA, headB) {
  let aNode = new Map();
  while (headA) {
    aNode.set(headA, 1);
    headA = headA.next;
  }
  while (headB) {
    if (aNode.has(headB)) {
      break;
    }
    headB = headB.next;
  }
  return headB;
};

/**
 * 160. 相交链表
 * @param {*} headA 
 * @param {*} headB 
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let nodeA = headA;
  let nodeB = headB;
  let changeA = false,
    changeB = false;
  while (nodeA && nodeB) {
    if (nodeA == nodeB) {
      break;
    }
    nodeA = nodeA.next;
    nodeB = nodeB.next;
    if (!changeA && !nodeA) {
      nodeA = headB;
      changeA = true;
    }
    if (!changeB && !nodeB) {
      nodeB = headA;
      changeB = true;
    }
  }
  return nodeA;
};
