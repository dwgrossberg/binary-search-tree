const mergeSort = (array) => {
  if (array.length < 2) return array;
  else {
    let half = Math.ceil(array.length / 2);
    let firstHalf = array.slice(0, half);
    let secondHalf = array.slice(half);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
};

const merge = (firstArray, secondArray) => {
  let sorted = [];
  // loop through the sorted arrays to find the largest element
  while (firstArray.length > 0 && secondArray.length > 0) {
    firstArray[0] > secondArray[0]
      ? sorted.push(secondArray.shift())
      : sorted.push(firstArray.shift());
  }
  // return sorted array, concatenated with the leftover elements
  // in either firstArray or secondArray
  return [...sorted, ...firstArray, ...secondArray];
};

export default mergeSort;
