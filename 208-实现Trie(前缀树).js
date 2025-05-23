
var Trie = function() {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    
    for(constp ch of word){
      if(!node[ch]){
        node[ch] = {};
      }
      node = node[ch]
    }
    node['isEnd'] = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const res = this.startsWith(word);
    if(!res || !res.isEnd) return false;
    return res;
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for(const ch of prefix){
      if(!node[ch]) return false;
      node = node[ch];
    }
    return node;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */