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

function bubleSort(input: string) {
    let list: number[] = formatList(input);
    console.log("Starting sort:\n")
    console.log(list);

    let iterationCounter: number = 0;
    let count: number = 0;

    while(validateSort(list) == false) {
        for(count = 0;count < list.length;count++) {
                if(list[count] > list[count + 1]) {
                    let a, b, c: number = 0;
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

// bubleSort("10, 5, 1");