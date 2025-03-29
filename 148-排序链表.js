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
    return mergeSort(head);
};

function mergeSort(head){
    if(!head || !head.next) return head;

    const dummy = new ListNode(0, head);
    let slow = dummy;
    let fast = dummy;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    const h2 = slow.next;
    slow.next = null;

    const left = mergeSort(head)
    const right = mergeSort(h2);
    return merge(left, right);
    
}

function merge(h1, h2){
    const dummy = new ListNode(0);
    let head = dummy;
    while(h1 && h2){
        if(h1.val <= h2.val){
            head.next = h1;
            head = head.next;
            h1 = h1.next
        }else{
            head.next = h2;
            head = head.next;
            h2 = h2.next;
        }
    }
    if(h1){
        head.next = h1;
    }
    if(h2){
        head.next = h2
    }
    return dummy.next;
    
}