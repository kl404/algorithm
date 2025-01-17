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
var swapPairs = function(head) {
    const dummy=new ListNode(0,head);
    let prev=dummy;
    let curr=head;
    while(curr && curr.next){
        const next=curr.next;
        curr.next=next.next;
        next.next=curr;
        prev.next=next;
        prev=curr;
        curr=curr.next;
    }
    return dummy.next;
};