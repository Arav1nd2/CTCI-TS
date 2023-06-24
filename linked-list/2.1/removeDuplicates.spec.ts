import { removeDuplicates, removeDuplicatesSpaceOptimized } from "./removeDuplicates";
import { ListNode, SingleLinkedList } from "../SingleLinkedList"

const tests = [
    { input: [1, 5, 2, 5, 9, 0, 2, 6, 4, 6], expectedOutput: [1, 5, 2, 9, 0, 6, 4] },
    { input: [6], expectedOutput: [6] },
    { input: [1, 1, 1], expectedOutput: [1] },
    { input: [], expectedOutput: [] }
]

test.each(tests)("should remove duplicates", ({ input, expectedOutput }) => {
    const inputList = new SingleLinkedList<Number>();
    input.forEach(num => inputList.append(new ListNode(num)));
    removeDuplicates(inputList);
    const output = new Array<Number>();
    inputList.forEach((node) => output.push(node.value));
    expect(output).toStrictEqual(expectedOutput);
});


test.each(tests)("should remove duplicates - space optimized", ({ input, expectedOutput }) => {
    const inputList = new SingleLinkedList<Number>();
    input.forEach(num => inputList.append(new ListNode(num)));
    removeDuplicatesSpaceOptimized(inputList);
    const output = new Array<Number>();
    inputList.forEach((node) => output.push(node.value));
    expect(output).toStrictEqual(expectedOutput);
});

