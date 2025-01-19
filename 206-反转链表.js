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
var reverseList = function (head) {
 
    let newHead=null;

    function dfs(head,pre){
        if(!head) return;
        if(!head.next){
            newHead=head;
        }
        dfs(head.next,head);
        head.next=pre;
    }
    dfs(head,null);
    return newHead;
};
