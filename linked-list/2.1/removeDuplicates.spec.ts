import { removeDuplicates, removeDuplicatesSpaceOptimized } from "./removeDuplicates";
import { SingleLinkedList } from "../../libs/SingleLinkedList"

const tests = [
    { input: [1, 5, 2, 5, 9, 0, 2, 6, 4, 6], expectedOutput: [1, 5, 2, 9, 0, 6, 4] },
    { input: [6], expectedOutput: [6] },
    { input: [1, 1, 1], expectedOutput: [1] },
    { input: [], expectedOutput: [] }
]

test.each(tests)("should remove duplicates", ({ input, expectedOutput }) => {
    const inputList = SingleLinkedList.fromArray(input);
    removeDuplicates(inputList);
    const output = inputList.toArray();
    expect(output).toStrictEqual(expectedOutput);
});


test.each(tests)("should remove duplicates - space optimized", ({ input, expectedOutput }) => {
    const inputList = SingleLinkedList.fromArray(input);
    removeDuplicatesSpaceOptimized(inputList);
    const output = inputList.toArray();
    expect(output).toStrictEqual(expectedOutput);
});

