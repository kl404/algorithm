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
 */
var sortList = function(head) {
    const dummy = new ListNode(0, head);
    let slow;
    let fast.
    let mid.

    while(fast && fast.next){

    }

    let left = sortList(..);
    let right = sortList(..)
    return merge(left, right);
    
};

function merge(l1, l2){
    const dummy = new ListNode(0);
    let cur = dummy;

    while(l1 && l2){
        const v1 = l1.val;
        const v2 = l2.val;
        if(v1 <= v2){
            cur.next = new ListNode(v1);
            cur = cur.next;
            l1 = l1.next;
        }else{
            cur.next = new ListNode(v2);
            cur = cur.next;
            l2 = l2.next;
        }
    }
    if(l1){
        cur.next = l1;
    }else if(l2){
        cur.next = l2;
    }

    return dummy.next;
}