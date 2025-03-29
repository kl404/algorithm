/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const minHeap = new MinHeap();
    const res = [];

    for(let i = 0; i < nums.length; i++){
        minHeap.push(nums[i]);
    }
    for(let i = 0; i < nums.length; i++){
        res.push(minHeap.pop());
    } 

    return res;
};

class MinHeap{
    constructor(){
        this.heap = [];
    }

    push(val){
        this.heap.push(val);
        this.#siftup(this.size() - 1);
    }
    pop(){
        this.swap(0, this.size() - 1);
        let res = this.heap.pop();
        this.#siftdown(0);
        return res;
    }
    top(){
        return this.heap[0];
    }
    size(){
        return this.heap.length;
    }
    swap(i , j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    #siftdown(i){
        while(true){
            const left = this.#leftChild(i);
            const right = this.#rightChild(i);
            
            const min = this.findMin(i, left, right);
            if(min === i) break;
            this.swap(min, i);
            i = min;


        }
    }   
    #siftup(i){
        
        while(true){
            const parent = this.#parent(i);
            if(parent < 0) break;

            if(this.heap[parent] <= this.heap[i]){
                break;
            }
            this.swap(parent, i);
            i = parent;

        }
    }
    #leftChild(i){
        return 2 * i + 1;
    }
    #rightChild(i){
        return 2 * i + 2;
    }
    #parent(i){
        return Math.floor((i - 1) / 2)
    };

    findMin(i, left, right){
        let min = i;
        if(left < this.size() && this.heap[left] < this.heap[min]){
            min = left;
        }
        if(right < this.size() && this.heap[right] < this.heap[min]){
            min = right;
        }
        return min;
    }


}