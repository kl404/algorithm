/**
 * @param {number} capacity
 */
class Node {
    constructor(key = 0, value = 0) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.dummy = new Node(); // 哨兵节点
    this.dummy.prev = this.dummy;
    this.dummy.next = this.dummy;
    this.keyToNode = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.getNode(key);
    return node ? node.value : -1;
};

/**
 * @param {number} key
 * @return {Node}
 */
LRUCache.prototype.getNode = function(key) {
    if (!this.keyToNode.has(key)) { // 没有这本书
        return -1;
    }
    const node = this.keyToNode.get(key); // 有这本书
    this.remove(node); // 把这本书抽出来
    this.pushFront(node); // 放在最上面
    return node;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.getNode(key);
    if (node) { // 有这本书
        node.value = value; // 更新value
        return;
    }
    this.keyToNode.set(key, node = new Node(key, value)); // 新书
    this.pushFront(node); // 放在最上面
    if (this.keyToNode.size > this.capacity) { // 书太多了
        const backNode = this.dummy.prev;
        this.keyToNode.delete(backNode.key);
        this.remove(backNode); // 去掉最后一本书
    }
};

/**
 * @param {Node} x
 * @return {void}
 */
LRUCache.prototype.remove = function(x) {
    x.prev.next = x.next;
    x.next.prev = x.prev;
};

/**
 * @param {Node} x
 * @return {void}
 */
LRUCache.prototype.pushFront = function(x) {
    x.prev = this.dummy;
    x.next = this.dummy.next;
    x.prev.next = x;
    x.next.prev = x;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */