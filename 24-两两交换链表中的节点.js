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
    const dummy = new ListNode(0, head);
    let pre = dummy;
    let cur = head;


    while(cur && cur.next){
        const nxt = cur.next.next;
        pre.next = cur.next;
        cur.next.next = cur;
        cur.next = nxt;

        pre = cur;
        cur = cur.next;
    }

    return dummy.next;


};