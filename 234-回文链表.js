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
var isPalindrome = function(head) {
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;
  
  while(fast && fast.next){
     slow = slow.next;
     fast = fast.next.next;
  }

  const backHead = slow.next;
  let pre = null;
  let cur = backHead;
  while(cur){
    const nex = cur.next;

    cur.next = pre;
    pre = cur;
    cur = nex;
  }

  
  while(backHead){
    if(head.val !== backHead.val){
      return false;
    }

    head = head.next;
    backHead = backHead.next;
  }
  return true;


};