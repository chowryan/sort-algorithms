const selectionSort = (arr, sortedArr = []) => {
  if (arr.length === 0) {
    return sortedArr;
  } else {
    let minVal = arr[0];
    let minI = 0;
    arr.forEach((val, i) => {
      if (val < minVal) {
        minVal = val;
        minI = i;
      }
    });
    sortedArr.push(minVal);
    arr.splice(minI, 1);
    return selectionSort(arr, sortedArr);
  }
};

const test = [1001, 100, 38, 191, 41, 11, 0, -1, 49, 69, 50, 171, -100, 38, 41];
const sortedTest = selectionSort(test);
console.log(sortedTest);
console.log(sortedTest.length === test.length);