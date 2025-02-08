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
function bubleSort(input) {
    var list = formatList(input);
    console.log("Starting sort:\n");
    console.log(list);
    var iterationCounter = 0;
    var count = 0;
    while (validateSort(list) == false) {
        for (count = 0; count < list.length; count++) {
            if (list[count] > list[count + 1]) {
                var a = void 0, b = void 0, c = 0;
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
