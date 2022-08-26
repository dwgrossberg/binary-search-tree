import mergeSort from "../binary-search-tree/mergeSort";

const Tree = (array) => {
  const buildTree = (arr) => {
    const arrWithoutDuplicates = [...new Set(arr)];
    const sortedArr = mergeSort(arrWithoutDuplicates);
    return sortedArr;
  };

  const root = buildTree(array);

  return {
    root,
    buildTree,
  };
};

export default Tree;
