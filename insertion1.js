const strings = ["apple", "cat", "kiwi", "papaya", "bull"];

function insertionSortString(strings) {
    for (let i = 1; i < strings.length; i++) {
        let key = strings[i];
        let j = i - 1;

        while (j >= 0 && strings[j].length > key.length) {
            strings[j + 1] = strings[j]; 
            j--;
        }

        strings[j + 1] = key;
    }

    return strings; 
}

console.log("Original array:", strings);
const sortedStrings = insertionSortString(strings);
console.log("Sorted array:", sortedStrings);
