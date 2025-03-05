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
    var getIntersectionNode = function(headA, headB) {
        let q = headA;
        let p = headB;

        while(headA != headB){
            headA = headA? headA.next: p;
            headB = headB? headB.next: q;
        }
        
        return headA;
        
    };