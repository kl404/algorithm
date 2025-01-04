/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function(head, cnt) {
    let front=head,back=head;
    for(let i=0;i<cnt;i++){
        front=front.next;
    }
    while(front){
        front=front.next;
        back=back.next;
    }
    return back;
};