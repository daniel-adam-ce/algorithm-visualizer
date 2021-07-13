
const DynamicIsSorted = (startingIndex, array) => {
    let i = startingIndex
    for (i; i < array.length - 1; i++) {
        if (array[i] > array[i+1]) {
            console.log('is not sorted', array.length, i)
            return i
        }
    }
    console.log('is sorted', array.length, i)
    return i
}

export default DynamicIsSorted