/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
    this.items = [];
    }

    enqueue(item) {
        this.items.push(item)
        return this.size()
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if(this.items.length === 0){
            return "this is empty"
        } else {
            return this.items.shift()
        }
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        if(this.items.length === 0){
            return "this is empty"
        } else {
            return this.items[0]
        }
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }
}
const newQueue = new Queue()

newQueue.enqueue("Beetman")
newQueue.enqueue("SpiderMan")
newQueue.enqueue("Beetman")
newQueue.enqueue("SpiderMan")
newQueue.enqueue("Beetman")
newQueue.enqueue("SpiderMan")
console.log(newQueue.dequeue())
console.log(newQueue.isEmpty())
console.log(newQueue.front())
console.log(newQueue.size())