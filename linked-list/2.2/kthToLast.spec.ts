import { SingleLinkedList } from "../../libs/SingleLinkedList";
import { kthToLast, kthToLastRecursive } from "./kthToLast";

const tests = [
    { input: { list: [1, 2, 3, 4, 5, 6, 7], k: 2 }, expectedOutput: 5 },
    { input: { list: [1], k: 0 }, expectedOutput: 1 },
    { input: { list: [1, 2], k: 1 }, expectedOutput: 1 },
    { input: { list: [1, 2, 3, 3, 3, 3, 3, 4, 4, 7], k: 6 }, expectedOutput: 3 },
]

test.each(tests)('return kth element from last of a linkedlist', ({ input: { list, k }, expectedOutput }) => {
    const inputList = SingleLinkedList.fromArray(list);
    const output = kthToLast(inputList, k);
    expect(output).not.toBeUndefined();
    expect(output?.value).toBe(expectedOutput);
});

test.each(tests)('return kth element from last of a linkedlist - recursive', ({ input: { list, k }, expectedOutput }) => {
    const inputList = SingleLinkedList.fromArray(list);
    const output = kthToLastRecursive(inputList, k);
    expect(output).not.toBeUndefined();
    expect(output?.value).toBe(expectedOutput);
});