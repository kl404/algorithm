/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if(!head) return null;
    const map=new Map();
    const dummy=new _Node(0);
    let curr=dummy;
    let p=head;
    while(p){
        const node=new _Node(p.val);
        map.set(p,node);
        curr.next=node;
        curr=curr.next;
        p=p.next;
    }
    p=head;
    curr=dummy.next;
    while(p){
        curr.random=map.get(p.random);
        p=p.next;
        curr=curr.next;
    }
    return dummy.next;
};