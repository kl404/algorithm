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
  // 找中间
  // 后面反转
  // 对比俩

  const dummy = new ListNode(0,head);
  let slow = dummy;
  let fast = dummy;
  while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
  }

  const mid = slow.next;
  slow.next = null;
  let pre =null;
  let cur = mid;
  while(cur){
    const nex = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nex;
  }






  let rightHead = pre;
  while(rightHead){
    if(rightHead.val !== head.val){
      return false;
    }
    rightHead = rightHead.next;
    head = head.next;
  }
  
  return true;
};