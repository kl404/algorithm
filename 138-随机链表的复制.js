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
        const map = new Map();
        let p = head;
        
        while(head){
            const node = new _Node(p.val);
            map.set(p, node);
            p = p.next;
        }

       head = p;
        while(head){
            const newNode = map.get(head);
            newNode.next = head.next? map.get(head.next) : null;
            newNode.random =head.random ?  map.get(head.random) : null;
            head = head.next;
        }

        return map.get(p);

    };