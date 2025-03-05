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
    if(!head) return head;
    const dummy = new ListNode(0, head);
    let slow = dummy;
    let fast =dummy;
    let mid = null;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    mid = slow.next;
    slow.next = null;
    let left = sortList(head);
    let right = sortList(mid);
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
    cur.next = l1 || l2;

    return dummy.next;
}