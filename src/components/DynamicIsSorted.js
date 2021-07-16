
const DynamicIsSorted = (startingIndex, array) => {
    let i = startingIndex
    for (i; i < array.length - 1; i++) {
        if (array[i] > array[i+1]) {
            return i
        }
    }
    return i
}

export default DynamicIsSorted