import { BubbleSort, SelectionSort } from "./Sorting.js";
// function mergeSort(input: string) {
//     let list: number[] = formatList(input);
//     console.log("Starting sort:\n")
//     console.log(list);
//     console.log("\n")
//     let subarray: number[][] = [];
//     let count: number = 0;
//     let sorted: boolean = false;
//     let iterationCounter: number = 0;
//     for(count = 0;count < list.length;count++) {
//         subarray[count] = [list[count]];
//         // console.log(subarray);
//     }
//     // console.log("\n" + subarray[1][0])
//     while(validateSort(list) == false) {
//         for(count = 0;count < list.length;count++) {
//             if(subarray[count] > subarray[count + 1]) {
//             let a: number = 0;
//             a = subarray[count][0];
//             subarray[count][0] = subarray[count + 1][0];
//             subarray[count + 1][0] = a;
//             console.log(subarray);
//             }
//         }
//         for(count = 0;count < list.length;count++) {
//             if(subarray[count][0] > subarray[count + 1][0]) {
//                 sorted = false;
//                 break;
//             }    
//         }
//     }
// }
// mergeSort(" 3, 67, 54, 32, 434");
const bubbleSort = new BubbleSort();
bubbleSort.algorithm("5, 4, 3");
const selectionSort = new SelectionSort();
bubbleSort.algorithm("5, 4, 3");
