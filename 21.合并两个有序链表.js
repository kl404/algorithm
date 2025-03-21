/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(0);
    let cur = dummy;


    while(list1 && list2){
        const v1 = list1.val;
        const v2 = list2.val;

        if(v1 < v2){
            const node = new ListNode(v1);
            cur.next = node;
            cur = node;
            list1 = list1.next;
        }else{
            const node = new ListNode(v2);
            cur.next = node;
            cur = node;
            list2 = list2.next;
        }

    }
    if(list1){
        cur.next = list1;
    }else if(list2){
        cur.next = list2;
    }
    return dummy.next;
};