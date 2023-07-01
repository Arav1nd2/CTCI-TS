import { ListNode, SingleLinkedList } from "../../libs/SingleLinkedList";

/**
 * Question: 
 * Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater 
 * than or equal to x. If x is contained within the list, the values of x only need to after the elements less than x. The partition element
 * x can appear anywhere in the "right partition". It does not need to appear between the left and right partitions.
 * @param linkedList SingleLinkedList<number>
 * @param partition number
 * 
 * Eg: 
 * Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
 * Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 * Solution: Using sorting
 * Time Complexity: O(n*n)
 * Space Complexity: O(1)
 */
export function partitionUsingSort(linkedList: SingleLinkedList<number>, partition: number): void {
    let ptrA = linkedList.head;
    while (ptrA != null) {
        let ptrB = ptrA.next;
        while (ptrB != null) {
            if (ptrB.value < ptrA.value) {
                const temp = ptrA.value;
                ptrA.value = ptrB.value;
                ptrB.value = temp;
            }
            ptrB = ptrB.next;
        }
        ptrA = ptrA.next;
    }
}

export function partitionUsingNewLL(linkedList: SingleLinkedList<number>, partition: number): SingleLinkedList<number> {
    let a = new SingleLinkedList<number>();
    let b = new SingleLinkedList<number>();
    let ptrA = linkedList.head;
    while (ptrA != null) {
        if (ptrA.value < partition) {
            a.append(new ListNode<number>(ptrA.value));
        } else {
            b.append(new ListNode<number>(ptrA.value));
        }
        ptrA = ptrA.next;
    }
    let tail = a.head;
    while (tail != null && tail.next != null) {
        tail = tail.next;
    }
    if (tail != null) {
        tail.next = b.head;
    }
    return a;
}
