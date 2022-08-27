import mergeSort from "../binary-search-tree/mergeSort";
import Node from "./Node";

const Tree = (inputArray) => {
  const buildTree = (arr, start, end) => {
    // base case
    if (start > end) return null;
    // find the middle
    const mid = parseInt((start + end) / 2);
    const root = Node(arr[mid]);
    // recursively construct left subtree
    root.leftChild = buildTree(arr, start, mid - 1);
    // recursively construct right subtree
    root.rightChild = buildTree(arr, mid + 1, end);
    return root;
  };

  const insertVal = (root, val) => {
    // base case - tree is empty
    if (root === null) {
      root = Node(val);
      return root;
    }
    // otherwise recur down the tree
    if (root.data > val) {
      root.leftChild = insertVal(root.leftChild, val);
    } else if (root.data < val) {
      root.rightChild = insertVal(root.rightChild, val);
    }
    // return the unchanged root node
    return root;
  };

  const array = [...new Set(mergeSort(inputArray))];
  let root = buildTree(array, 0, array.length - 1);
  const preOrderData = [];
  const inOrderData = [];
  const postOrderData = [];

  return {
    array,
    root,
    insertVal,
  };
};

export default Tree;
