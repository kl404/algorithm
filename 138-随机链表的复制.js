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
var copyRandomList = function (head) {
  if (!head) return null;

  const map = new Map();

  let cur = head;
  while (cur) {
    const node = new _Node(cur.val);
    map.set(cur, node);
    cur = cur.next;
  }

  cur = head;
  while (cur) {
    const newNode = map.get(cur);
    newNode.next = cur.next ? map.get(cur.next) : null;
    newNode.random = cur.random ? map.get(cur.random) : null;
    cur = cur.next;
  }
  return map.get(head);
};
