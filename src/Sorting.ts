import { UtilClass } from "./UtilClass.js";

export interface Algorithm {
    name: string;

    algorithm(input: string): void;
}


export class BubbleSort extends UtilClass implements Algorithm  {
    readonly name: string = "Bubble Sort";

    constructor(){
        super();
        console.log("Algorithm name: " + this.name);
    }

    algorithm(input: string): void {
        let list: number[] = this.formatList(input);
        console.log("Starting sort:\n")
        console.log(list);

        let iterationCounter: number = 0;
        let count: number = 0;

        while(this.validateSort(list) == false) {
            for(count = 0;count < list.length;count++) {
                    if(list[count] > list[count + 1]) {
                        let a, b: number = 0;
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

export class SelectionSort extends UtilClass implements Algorithm  {
    readonly name: string = "Selection Sort";

    constructor(){
        super();
        console.log("Algorithm name: " + this.name);
    }

    algorithm(input: string): void {
        let list: number[] = this.formatList(input);
        console.log("Starting sort:\n")
        console.log(list);
        console.log("\n")

        let subarray: number[] = [];
        let count: number = 0;
        let iterationCounter: number = 0;

        while(list.length > 0) {
            let smallest: number = Infinity;

            for(count = 0;count < list.length;count++) { 
                if(list[count] <= smallest) {
                    smallest = list[count];
                }
            }

            iterationCounter++;
            
            let a: number = list.indexOf(smallest);
            list.splice(a , 1)
            subarray.push(smallest);
            console.log(subarray);
        }
        console.log("\nMethod: Selection Sort\nIterations: " + iterationCounter + " \nSorting Finished\n-----------------");
    }
}