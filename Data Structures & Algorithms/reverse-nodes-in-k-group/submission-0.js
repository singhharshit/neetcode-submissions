
class Solution {
    reverseKGroup(head, k) {
        if (head === null || k === 1) {
            return head;
        }

        let dummy = new ListNode(0, head);
        let prev = dummy;
        let curr = head;

        while (true) {
            // Check whether k nodes are available
            let kth = curr;

            for (let i = 0; i < k && kth !== null; i++) {
                kth = kth.next;
            }

            if (kth === null && curr !== null) {
                // Check if fewer than k nodes remain
                let count = 0;
                let temp = curr;

                while (temp !== null && count < k) {
                    temp = temp.next;
                    count++;
                }

                if (count < k) break;
            }

            if (curr === null) break;

            // Save the node after this group
            let groupNext = curr;

            for (let i = 0; i < k; i++) {
                groupNext = groupNext.next;
            }

            let oldHead = curr;
            this.reverseK(prev, curr, k, groupNext);

            // oldHead is now the tail of the reversed group
            prev = oldHead;
            curr = groupNext;
        }

        return dummy.next;
    }

    reverseK(before, node, k, after) {
        let curr = node;
        let prev = after;

        for (let i = 0; i < k; i++) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        before.next = prev;
    }
}
