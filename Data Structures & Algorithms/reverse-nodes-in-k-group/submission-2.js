
class Solution {
    reverseKGroup(head, k) {
        if (head === null || k === 1) {
            return head;
        }

        let curr = head;

        for (let i = 0; i < k; i++) {
            if (curr === null) {
                return head; // Leave remaining nodes unchanged
            }
            curr = curr.next;
        }

        curr = head;
        let prev = null;

        for (let i = 0; i < k; i++) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        head.next = this.reverseKGroup(curr, k);

        return prev;
    }
}
