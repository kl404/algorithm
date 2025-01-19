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
    // 如果链表为空或只有一个节点,直接返回
    if(!head || !head.next) return head;
    
    // 使用快慢指针找到链表中点
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // 分割链表
    let mid = slow.next;
    slow.next = null;
    
    // 递归排序左右两部分
    let left = sortList(head);
    let right = sortList(mid);
    
    // 合并两个有序链表
    return merge(left, right);
};

// 合并两个有序链表
function merge(l1, l2) {
    // 创建虚拟头节点
    const dummy = new ListNode(0);
    let curr = dummy;
    
    // 比较两个链表节点值大小,按升序连接
    while(l1 && l2) {
        if(l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    // 连接剩余部分
    curr.next = l1 || l2;
    
    return dummy.next;
}