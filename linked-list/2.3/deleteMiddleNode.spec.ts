import { SingleLinkedList } from "../../libs/SingleLinkedList"
import { deleteMiddleNode } from "./deleteMiddleNode";

const tests = [
    { input: { list: [1, 2, 3, 4, 5, 6], pos: 3 }, expectedOutput: [1, 2, 3, 5, 6] },
    { input: { list: [1, 5, 6], pos: 1 }, expectedOutput: [1, 6] },
    { input: { list: [1, 2, 2, 2, 5, 6], pos: 4 }, expectedOutput: [1, 2, 2, 2, 6] }
]

test.each(tests)('delete middle node from single linked list', ({ input: { list, pos }, expectedOutput }) => {
    const linkedList = SingleLinkedList.fromArray(list);
    const listNode = linkedList.getNode(pos);
    deleteMiddleNode(listNode);
    const actualOutput = linkedList.toArray();
    expect(actualOutput).toStrictEqual(expectedOutput);
})
