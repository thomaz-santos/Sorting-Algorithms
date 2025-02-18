import { UtilClass } from "./UtilClass.js";
export class BubbleSort extends UtilClass {
    constructor() {
        super();
        this.name = "Bubble Sort";
        console.log("Algorithm name: " + this.name);
    }
    algorithm(input) {
        let list = this.formatList(input);
        console.log("Starting sort:\n");
        console.log(list);
        let iterationCounter = 0;
        let count = 0;
        while (this.validateSort(list) == false) {
            for (count = 0; count < list.length; count++) {
                if (list[count] > list[count + 1]) {
                    let a, b = 0;
                    a = list[count];
                    b = list[count + 1];
                    list[count] = b;
                    list[count + 1] = a;
                    console.log(list);
                    iterationCounter++;
                }
            }
            count = 0;
        }
        console.log("\nMethod: Bubble Sort\nIterations: " + iterationCounter + " \nSorting Finished\n-----------------");
    }
}
export class SelectionSort extends UtilClass {
    constructor() {
        super();
        this.name = "Selection Sort";
        console.log("Algorithm name: " + this.name);
    }
    algorithm(input) {
        let list = this.formatList(input);
        console.log("Starting sort:\n");
        console.log(list);
        console.log("\n");
        let subarray = [];
        let count = 0;
        let iterationCounter = 0;
        while (list.length > 0) {
            let smallest = Infinity;
            for (count = 0; count < list.length; count++) {
                if (list[count] <= smallest) {
                    smallest = list[count];
                }
            }
            iterationCounter++;
            let a = list.indexOf(smallest);
            list.splice(a, 1);
            subarray.push(smallest);
            console.log(subarray);
        }
        console.log("\nMethod: Selection Sort\nIterations: " + iterationCounter + " \nSorting Finished\n-----------------");
    }
}
