function validateSort(list: number[]) {
    let count: number;
    for(count = 0;count < list.length;count++) {
        if(list[count] > list[count + 1]) {
            return false;
        }    
    }
    return true;
}

function formatList(input: string) {
    try {
        input = "[" + input + "]";
        let list: number[] = JSON.parse(input);

        return list
    } catch (error) {
        console.log("Erro ao transformar a string" + error)
        return [];
    }
}

function bubbleSort(input: string) {
    let list: number[] = formatList(input);
    console.log("Starting sort:\n")
    console.log(list);

    let iterationCounter: number = 0;
    let count: number = 0;

    while(validateSort(list) == false) {
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

function selectionSort(input: string) {
    let list: number[] = formatList(input);
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

// selectionSort("10, 5, 1, -2, -5");
// bubbleSort("10, 5, 1");