const mergeTwoArr = (arr1 = [], arr2 = [], sortedArr = []) => {
  if (arr1.length === 0) {
    return sortedArr.concat(arr2);
  } else if (arr2.length === 0) {
    return sortedArr.concat(arr1);
  } else if (arr1[0] > arr2[0]) {
    sortedArr.push(arr2[0]);
    return mergeTwoArr(arr1, arr2.slice(1), sortedArr);
  } else if (arr1[0] <= arr2[0]) {
    sortedArr.push(arr1[0]);
    return mergeTwoArr(arr1.slice(1), arr2, sortedArr);
  }
}

const mergeSort = arr => {
  const initSplitArr = arr.map(val => [val]);
  const mergeArrays = splitArr => {
    let mergedArr = [];
    if (splitArr.length <= 1) {
      return splitArr[0];
    } else {
      for (let i = 0; i < splitArr.length; i += 2) {
        mergedArr.push(mergeTwoArr(splitArr[i], splitArr[i + 1]));
      }
      return mergeArrays(mergedArr);
    }
  };
  return mergeArrays(initSplitArr);
}

const test = [1001, 100, 38, 191, 41, 11, 0, -1, 49, 69, 50, 171, -100, 38, 41];
const sortedTest = mergeSort(test);
console.log(sortedTest);
