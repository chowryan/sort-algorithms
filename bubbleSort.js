const bubbleSort = (arr, sortedArr = []) => {
  if (arr.length === 0) {
    return sortedArr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const greaterVal = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = greaterVal;
      }
    }
  sortedArr.unshift(arr[arr.length - 1]);
  return bubbleSort(arr.slice(0, arr.length - 1), sortedArr);
  }
}

const test = [1001, 100, 38, 191, 41, 11, 0, -1, 49, 69, 50, 171, -100, 38, 41];
const sortedTest = bubbleSort(test);
console.log(sortedTest);
console.log(sortedTest.length === test.length);