import { ListNode, SingleLinkedList } from "../SingleLinkedList";
import { kthToLast } from "./kthToLast";

const tests = [
    { input: { list: [1, 2, 3, 4, 5, 6, 7], k: 2 }, expectedOutput: 5 },
    { input: { list: [1], k: 0 }, expectedOutput: 1 },
    { input: { list: [1, 2], k: 1 }, expectedOutput: 1 },
    { input: { list: [1, 2, 3, 3, 3, 3, 3, 4, 4, 7], k: 6 }, expectedOutput: 3 },
]

test.each(tests)('return kth element from last of a linkedlist', ({ input: { list, k }, expectedOutput }) => {
    const inputList = new SingleLinkedList<Number>();
    list.forEach(num => inputList.append(new ListNode(num)));
    const output = kthToLast(inputList, k);
    expect(output).not.toBeUndefined();
    expect(output?.value).toBe(expectedOutput);
});