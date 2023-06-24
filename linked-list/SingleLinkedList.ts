export class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
};

export class SingleLinkedList<T> {
    head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    append(node: ListNode<T>) {
        if (this.head == null) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail != null && tail.next != null) {
            tail = tail.next;
        }
        tail.next = node;
    }

    forEach(cb: (node: ListNode<T>, index: Number) => void) {
        let pointer = this.head;
        let counter = 0;
        while (pointer != null) {
            cb(pointer, counter);
            counter++;
            pointer = pointer.next;
        }
    }
}

