import { ListNode, SingleLinkedList } from "../SingleLinkedList";

/**
 * Question - Implement an algorithm to return the kth element from last from a linked list
 * Space Complexity - O(1)
 * Time Complexity - O(n) where n is number of elements of the list
 * @param linkedList SingleLinkedList<Number>
 */
export function kthToLast(linkedList: SingleLinkedList<Number>, k: number): (ListNode<Number> | null) {
    let pointerA = linkedList.head;
    let counter: number = 0;
    while (counter < k && pointerA != null) {
        pointerA = pointerA.next;
        counter++;
    }
    let pointerB = linkedList.head;
    while (pointerA != null && pointerA.next != null && pointerB != null) {
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }
    return pointerB;
}