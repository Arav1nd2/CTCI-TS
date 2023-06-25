import { ListNode } from '../../libs/SingleLinkedList'

/**
 * Question: Implement an algorithm to delete a node in the
 * middle(i.e., any node but the first and last node, not necessarily the exact middle)
 * of a singly linked list, given only access to that node.
 * Space Complexity: O(1)
 * Time Complexity: O(1)
 * @param node ListNode<number>
 * @returns void
 */
export function deleteMiddleNode(node: ListNode<number> | null): void {
    if (node == null || node.next == null) return;
    const next = node.next;
    node.value = next.value;
    node.next = next.next;
}