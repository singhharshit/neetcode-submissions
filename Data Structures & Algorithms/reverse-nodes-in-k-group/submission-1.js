
class Solution {
    reverseKGroup(head, k) {
        if (head === null || k === 1) {
            return head;
        }

        // Step 1: Check if at least k nodes exist
        let curr = head;

        for (let i = 0; i < k; i++) {
            if (curr === null) {
                return head; // Leave remaining nodes unchanged
            }
            curr = curr.next;
        }

        // Step 2: Reverse the first k nodes
        curr = head;
        let prev = null;

        for (let i = 0; i < k; i++) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // Step 3: Recursively process remaining nodes
        head.next = this.reverseKGroup(curr, k);

        // prev is the new head of this reversed group
        return prev;
    }
}
