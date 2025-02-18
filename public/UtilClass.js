export class UtilClass {
    validateSort(list) {
        let count;
        for (count = 0; count < list.length; count++) {
            if (list[count] > list[count + 1]) {
                return false;
            }
        }
        return true;
    }
    formatList(input) {
        try {
            input = "[" + input + "]";
            let list = JSON.parse(input);
            return list;
        }
        catch (error) {
            console.log("Erro ao transformar a string" + error);
            return [];
        }
    }
}
