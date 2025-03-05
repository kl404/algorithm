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
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0);
    let cur = dummy;


    let sum = 0;
    let carry = 0;
    let remain = 0;

    while(l1 || l2 || carry){
      const v1 = l1? l1.val : 0;
      const v2 = l2? l2.val : 0;

      sum = v1 + v2 + carry;
      carry = Math.floor(sum / 10);
      remain = sum % 10;
      const node = new ListNode(remain);
      cur.next = node;
      cur = node;


      l1 = l1? l1.next : null;
      l2 = l2? l2.next : null;
    }
    return dummy.next;
};