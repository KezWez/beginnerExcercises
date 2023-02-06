function getMax(arr) {
    let largest = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
        
    }
    return largest
}

console.log(getMax([5, 100, 0]))