import { SingleLinkedList } from "../../libs/SingleLinkedList";
import { sumLists, sumListsReverse } from "./sumLists";
const lsdTests = [
    { input: { listA: [7, 1, 6], listB: [5, 9, 2] }, expectedOutput: [2, 1, 9] },
    { input: { listA: [7, 1, 6], listB: [5, 9, 2, 8, 6, 7, 2] }, expectedOutput: [2, 1, 9, 8, 6, 7, 2] },
    { input: { listA: [9, 9, 9, 9, 9], listB: [9, 9, 9, 9, 9, 9, 9] }, expectedOutput: [8, 9, 9, 9, 9, 0, 0, 1] }
];

const msdTests = [
    { input: { listA: [6, 1, 7], listB: [2, 9, 5] }, expectedOutput: [9, 1, 2] },
    { input: { listA: [6, 1, 7], listB: [2, 7, 6, 8, 2, 9, 5] }, expectedOutput: [2, 7, 6, 8, 9, 1, 2] },
    {
        input: { listA: [9, 9, 9, 9, 9], listB: [9, 9, 9, 9, 9, 9, 9] }, expectedOutput: [1, 0, 0, 9, 9, 9, 9, 8]
    }
];


test.each(lsdTests)('sum lists with head pointing to Least Significant Digit', ({ input: { listA, listB }, expectedOutput }) => {
    let A = SingleLinkedList.fromArray(listA);
    let B = SingleLinkedList.fromArray(listB);
    let ans = sumLists(A, B).toArray();
    expect(ans).toStrictEqual(expectedOutput);
});

test.each(msdTests)('sum lists with head pointing to Most Significant Digit', ({ input: { listA, listB }, expectedOutput }) => {
    let A = SingleLinkedList.fromArray(listA);
    let B = SingleLinkedList.fromArray(listB);
    let ans = sumListsReverse(A, B).toArray();
    expect(ans).toStrictEqual(expectedOutput);
});
