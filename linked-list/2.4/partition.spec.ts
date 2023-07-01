import { SingleLinkedList } from "../../libs/SingleLinkedList";
import { partitionUsingNewLL, partitionUsingSort } from "./partition";

const tests = [
    { input: { list: [3, 5, 8, 5, 10, 2, 1], partition: 5 } }
];

test.each(tests)('check partition using sorting', ({ input: { list, partition } }) => {
    const inputList = SingleLinkedList.fromArray(list);
    partitionUsingSort(inputList, partition);
    let hasSeenLarge = false;
    inputList.forEach((node) => {
        if (hasSeenLarge) {
            expect(node.value).toBeGreaterThanOrEqual(partition);
        } else if (!hasSeenLarge && node.value >= partition) {
            hasSeenLarge = true;
        } else {
            expect(node.value).toBeLessThan(partition);
        }
    });
});

test.each(tests)('check partition using new linked list', ({ input: { list, partition } }) => {
    const inputList = SingleLinkedList.fromArray(list);
    const outputList = partitionUsingNewLL(inputList, partition);
    let hasSeenLarge = false;
    outputList.forEach((node) => {
        if (hasSeenLarge) {
            expect(node.value).toBeGreaterThanOrEqual(partition);
        } else if (!hasSeenLarge && node.value >= partition) {
            hasSeenLarge = true;
        } else {
            expect(node.value).toBeLessThan(partition);
        }
    });
});

