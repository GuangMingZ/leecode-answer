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
 * 21. 合并两个有序链表
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  let node1 = l1,
    node2 = l2;
  let res, temp;
  if (node1.val <= node2.val) {
    res = temp = node1;
    node1 = node1.next;
  } else {
    res = temp = node2;
    node2 = node2.next;
  }
  while (node1 && node2) {
    if (node1.val <= node2.val) {
      temp.next = node1;
      node1 = node1.next;
    } else {
      temp.next = node2;
      node2 = node2.next;
    }
    temp = temp.next;
  }
  if (node1) {
    temp.next = node1;
  } else if (node2) {
    temp.next = node2;
  }
  return res;
};

/**
 * @param {*} l1 
 * @param {*} l2 
 * 21. 合并两个有序链表
 */
var mergeTwoLists2 = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  let resArr = [];
  while (l1 && l2) {
    if (l1.val < l2.val) {
      resArr.push(l1);
      l1 = l1.next;
    } else {
      resArr.push(l2);
      l2 = l2.next;
    }
  }
  if (l1) {
    resArr.push(l1);
  } else if (l2) {
    resArr.push(l2);
  }
  for (let i = 0, n = resArr.length; i < n - 1; i++) {
    resArr[i].next = resArr[i + 1];
  }
  return resArr[0];
};
