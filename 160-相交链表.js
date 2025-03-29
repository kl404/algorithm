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
 */
var getIntersectionNode = function (headA, headB) {
  const tmpA = headA;
  const tmpB = headB;

  while (headA || headB) {
    if (headA === headB) break;
    if(!headA) headA = tmpB;
    if(!headB) headB = tmpA;
    if (headA === headB) break;
    

    headA = headA.next;
    headB = headB.next;
 

    
  }
  return headA;
};
