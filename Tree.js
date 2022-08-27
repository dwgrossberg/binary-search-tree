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
    if (val < root.data) {
      root.leftChild = insertVal(root.leftChild, val);
    } else if (val > root.data) {
      root.rightChild = insertVal(root.rightChild, val);
    }
    // return the unchanged root node
    return root;
  };

  const deleteVal = (root, val) => {
    // base case - tree is empty
    if (root === null) return root;
    // otherwise recur down the tree
    if (val < root.data) {
      root.leftChild = deleteVal(root.leftChild, val);
    } else if (val > root.data) {
      root.rightChild = deleteVal(root.rightChild, val);
    } // if val == root.data
    else {
      // if node has no children or one child
      if (root.leftChild === null) {
        return root.rightChild;
      } else if (root.rightChild === null) {
        return root.leftChild;
      } // for nodes with two children, find the inorder successor
      root.data = minValue(root.rightChild);
      // and delete the inorder successor
      root.rightChild = deleteVal(root.rightChild, root.data);
    }
    return root;
  };

  const minValue = (root) => {
    let minV = root.data;
    while (root.leftChild != null) {
      minV = root.leftChild.data;
      root = root.leftChild;
    }
    return minV;
  };

  const find = (root, value) => {
    if (root === null) return false;
    if (root.data === value) return root;
    if (root.data > value) {
      return find(root.leftChild, value);
    } else if (root.data < value) {
      return find(root.rightChild, value);
    }
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
    deleteVal,
    find,
  };
};

export default Tree;
