import mergeSort from "../binary-search-tree/mergeSort";
import Node from "./Node";

const Tree = (inputArray) => {
  const buildTree = (arr, start, end) => {
    // base case
    if (start > end) return;
    // find the middle
    const mid = Math.floor((start + end) / 2);
    const root = Node(arr[mid]);
    // recursively construct left subtree
    root.leftChild = buildTree(arr, start, mid - 1);
    // recursively construct right subtree
    root.rightChild = buildTree(arr, mid + 1, end);
    return root;
  };

  const array = [...new Set(mergeSort(inputArray))];
  const root = buildTree(array, 0, array.length - 1);
  const preOrderData = [];
  const inOrderData = [];
  const postOrderData = [];

  console.log(array, root);

  return {
    array,
    root,
  };
};

export default Tree;
