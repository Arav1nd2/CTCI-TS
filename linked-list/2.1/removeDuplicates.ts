import { SingleLinkedList } from "../SingleLinkedList";

/**
 * Question: Remove duplicates from an unsorted linked list
 * n - is the number of elements in the list
 * Space Complexity: O(n)
 * Time Complexity: O(n)
 */
export function removeDuplicates(linkedList: SingleLinkedList<Number>): void {
    const numset = new Set<Number>();
    let p = linkedList.head, q = (linkedList.head && linkedList.head.next);
    if (!p) return;
    if (p && !q) return;
    numset.add(p.value);
    while (p != null && q != null) {
        if (numset.has(q.value)) {
            p.next = q.next;
            q = q.next;
        } else {
            numset.add(q.value);
            p = p.next;
            q = q.next;
        }
    }
}

/**
 * Question: Remove duplicates from an unsorted linked list
 * n - is the number of elements in the list
 * Space Complexity: O(1)
 * Time Complexity: O(n^2)
 */
export function removeDuplicatesSpaceOptimized(linkedList: SingleLinkedList<Number>): void {
    let p = linkedList.head, q = linkedList.head && linkedList.head.next;
    if (!p) return;
    if (p && !q) return;
    while (p != null && q != null) {
        let isSeenBefore = false;
        let r = linkedList.head;
        while (r != null) {
            if (r.value == q.value) {
                isSeenBefore = true;
                break;
            }
            r = r.next;
        }
        if (isSeenBefore) {
            p.next = q.next;
            q = q.next;
        } else {
            p = p.next;
            q = q.next;
        }
    }
}