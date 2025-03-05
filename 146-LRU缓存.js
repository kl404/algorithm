    /**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.lruMap = new Map();
    this.size = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.lruMap.has(key)){
        const value = this.lruMap.get(key);
        this.lruMap.delete(key);
        this.lruMap.set(key, value);
        return value;
    }else{
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.lruMap.has(key)){
        this.lruMap.delete(key);
        
    }
    this.lruMap.set(key, value); 
    if(this.lruMap.size >this.size){
        const least = this.lruMap.keys().next().value;
        this.lruMap.delete(least);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */