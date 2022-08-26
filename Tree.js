import mergeSort from "../binary-search-tree/mergeSort";

const Tree = (array) => {
  const sortArray = (arr) => {
    const arrWithoutDuplicates = [...new Set(arr)];
    const sortedArr = mergeSort(arrWithoutDuplicates);
    return sortedArr;
  };

  const buildTree = (arr) => {};

  const root = buildTree(array);

  return {
    root,
    sortArray,
    buildTree,
  };
};

export default Tree;
