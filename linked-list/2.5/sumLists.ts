import { ListNode, SingleLinkedList } from "../../libs/SingleLinkedList";


/**
 * Question: You have 2 numbers represented by linked lists, where each node contains a single digit.
 * The digits are stored in reverse order, such that the one's digit is at the head of the list.
 * Write a function that adds two numbers and returns the sum as a linked list.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */


export function sumLists(listA: SingleLinkedList<number>, listB: SingleLinkedList<number>): SingleLinkedList<number> {
    let ptrA = listA.head;
    let ptrB = listB.head;
    let ans = new SingleLinkedList<number>();
    let carry = 0;
    while (ptrA != null || ptrB != null) {
        const x = ptrA != null ? ptrA.value : 0;
        const y = ptrB != null ? ptrB.value : 0;
        const nextX = ptrA != null ? ptrA.next : null;
        const nextY = ptrB != null ? ptrB.next : null;
        const newNodeVal = (x + y + carry) % 10;
        const newCarry = Math.floor((x + y + carry) / 10);
        const node = new ListNode<number>(newNodeVal);
        carry = newCarry;
        ans.append(node);
        ptrA = nextX;
        ptrB = nextY;
    }
    if (carry > 0) {
        const node = new ListNode<number>(carry);
        ans.append(node);
    }
    return ans;
}

/**
 * Question: You have 2 numbers represented by linked lists, where each node contains a single digit.
 * The digits are stored in an order, such that the most significant digit is at the head of the list.
 * Write a function that adds two numbers and returns the sum as a linked list.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function sumListsReverse(listA: SingleLinkedList<number>, listB: SingleLinkedList<number>): SingleLinkedList<number> {
    let lenA = 0, lenB = 0;
    listA.forEach(() => lenA++);
    listB.forEach(() => lenB++);

    // pad the linked lists
    if (lenA > lenB) {
        let diff = lenA - lenB;
        while (diff != 0) {
            const n = new ListNode<number>(0);
            n.next = listB.head;
            listB.head = n;
            diff--;
        }
    } else {
        let diff = lenB - lenA;
        while (diff != 0) {
            const n = new ListNode<number>(0);
            n.next = listA.head;
            listA.head = n;
            diff--;
        }
    }
    const ansNode = new ListNode<number>(0);
    const ans = new SingleLinkedList<number>();
    const carry = recurse(listA.head, listB.head, ansNode);
    ans.head = ansNode;
    if (carry > 0) {
        const node = new ListNode<number>(carry);
        node.next = ansNode;
        ans.head = node;
    }
    return ans;
}

function recurse(nodeA: ListNode<number> | null, nodeB: ListNode<number> | null, ansNode: ListNode<number> | null): number {
    if (nodeA && nodeA.next == null && nodeB && nodeB.next == null) {
        const newNodeVal = (nodeA.value + nodeB.value) % 10;
        if (ansNode) {
            ansNode.value = newNodeVal;
        }
        return Math.floor((nodeA.value + nodeB.value) / 10);
    }
    if (nodeA == null || nodeB == null) {
        return 0;
    }
    const newNextNode = new ListNode<number>(0);
    if (ansNode != null) {
        ansNode.next = newNextNode;
    }
    const carry = recurse(nodeA.next, nodeB.next, newNextNode);
    const sum = nodeA.value + nodeB.value + carry;
    if (ansNode != null) {
        ansNode.value = sum % 10;
    }
    return Math.floor(sum / 10);
}