function validateSort(list) {
    var count;
    for (count = 0; count < list.length; count++) {
        if (list[count] > list[count + 1]) {
            return false;
        }
    }
    return true;
}
function formatList(input) {
    try {
        input = "[" + input + "]";
        var list = JSON.parse(input);
        return list;
    }
    catch (error) {
        console.log("Erro ao transformar a string" + error);
        return [];
    }
}
function bubbleSort(input) {
    var list = formatList(input);
    console.log("Starting sort:\n");
    console.log(list);
    var iterationCounter = 0;
    var count = 0;
    while (validateSort(list) == false) {
        for (count = 0; count < list.length; count++) {
            if (list[count] > list[count + 1]) {
                var a = void 0, b = 0;
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
function selectionSort(input) {
    var list = formatList(input);
    console.log("Starting sort:\n");
    console.log(list);
    console.log("\n");
    var subarray = [];
    var count = 0;
    var iterationCounter = 0;
    while (list.length > 0) {
        var smallest = Infinity;
        for (count = 0; count < list.length; count++) {
            if (list[count] <= smallest) {
                smallest = list[count];
            }
        }
        iterationCounter++;
        var a = list.indexOf(smallest);
        list.splice(a, 1);
        subarray.push(smallest);
        console.log(subarray);
    }
    console.log("\nMethod: Selection Sort\nIterations: " + iterationCounter + " \nSorting Finished\n-----------------");
}
// selectionSort("10, 5, 1, -2, -5");
// bubbleSort("10, 5, 1");
