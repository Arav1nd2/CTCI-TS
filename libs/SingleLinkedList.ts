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
    tail: ListNode<T> | null;

    static fromArray(arr: any[]): SingleLinkedList<any> {
        if (arr.length <= 0) {
            return new SingleLinkedList<any>();
        }
        type dataType = typeof arr[0];
        const linkedList = new SingleLinkedList<dataType>();
        arr.forEach(val => linkedList.append(new ListNode<dataType>(val)));
        return linkedList;
    }

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(node: ListNode<T>) {
        if (this.head == null) {
            this.head = node;
            this.tail = node;
            return;
        }
        if (this.tail != null) {
            this.tail.next = node;
            this.tail = node;
        }
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

    getNode(index: number): (ListNode<T> | null) {
        if (index == 0) return this.head;
        let ptr = this.head;
        while (index > 0 && ptr != null) {
            ptr = ptr.next;
            index--;
        }
        return ptr;
    }

    toArray(): T[] {
        let ptr = this.head;
        const ans: T[] = [];
        while (ptr != null) {
            ans.push(ptr.value);
            ptr = ptr.next;
        }
        return ans;
    }
}

