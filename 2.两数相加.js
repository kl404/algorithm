/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1 第一个链表
 * @param {ListNode} l2 第二个链表
 * @return {ListNode} 返回相加后的新链表
 */
var addTwoNumbers = function (l1, l2) {
  // 创建一个虚拟头节点
  const pre = new ListNode(0);
  // 当前指针指向虚拟头节点
  let cur = pre;
  // 进位值,初始为0
  let carry = 0;

  // 当两个链表都没遍历完时继续循环
  while (l1 !== null || l2 !== null) {
    // 获取当前节点的值,如果链表已经遍历完则取0
    const x = l1 === null ? 0 : l1.val;
    const y = l2 === null ? 0 : l2.val;
    // 计算当前位的和,需要加上进位值
    const sum = x + y + carry;

    // 计算新的进位值
    carry = Math.floor(sum / 10);
    // 创建新节点,值为sum对10取余
    cur.next = new ListNode(sum % 10);

    // 移动当前指针
    cur = cur.next;
    // 如果链表没有遍历完则移动到下一个节点
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  // 如果最后还有进位,需要创建新的节点
  if (carry === 1) {
    cur.next = new ListNode(carry);
  }

  // 返回虚拟头节点的下一个节点
  return pre.next;
};
