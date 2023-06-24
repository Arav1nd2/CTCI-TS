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