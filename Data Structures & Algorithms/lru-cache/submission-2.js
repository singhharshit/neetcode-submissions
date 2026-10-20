
class ListNode {
    constructor(val) {
        this.val = val; // [key, value]
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.head = null; // Most recently used
        this.capacity = capacity;
        this.count = 0;
    }

    get(key) {
        let curr = this.head;
        let prev = null;

        while (curr !== null) {
            if (curr.val[0] === key) {
                const value = curr.val[1];

                // Move node to the front
                if (prev !== null) {
                    prev.next = curr.next;
                    curr.next = this.head;
                    this.head = curr;
                }

                return value;
            }

            prev = curr;
            curr = curr.next;
        }

        return -1;
    }

    put(key, value) {
        if (this.capacity === 0) {
            return;
        }

        let curr = this.head;
        let prev = null;

        // Check if key already exists
        while (curr !== null) {
            if (curr.val[0] === key) {
                curr.val[1] = value;

                // Move updated node to the front
                if (prev !== null) {
                    prev.next = curr.next;
                    curr.next = this.head;
                    this.head = curr;
                }

                return;
            }

            prev = curr;
            curr = curr.next;
        }

        // Evict least recently used node if full
        if (this.count === this.capacity) {
            if (this.head.next === null) {
                this.head = null;
            } else {
                let node = this.head;

                while (node.next.next !== null) {
                    node = node.next;
                }

                node.next = null;
            }

            this.count--;
        }

        // Insert new node at the front
        const node = new ListNode([key, value]);
        node.next = this.head;
        this.head = node;
        this.count++;
    }
}
