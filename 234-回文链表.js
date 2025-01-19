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
 */
var isPalindrome = function (head) {
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let pre = null;
  let cur = slow.next;
  while (cur) {
    const tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }

  let left = head;
  let right = pre;
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
};
