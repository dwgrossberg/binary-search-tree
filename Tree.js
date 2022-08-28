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

  // Breadth-First Search
  // Traversal using a queue to print node values level by level
  const levelOrder = (callback) => {
    if (root === null) return [];
    const queue = [root];
    const result = [];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node.leftChild !== null) queue.push(node.leftChild);
      if (node.rightChild !== null) queue.push(node.rightChild);
      if (callback) callback(node);
      else result.push(node.data);
    }
    return result;
  };

  // Depth-First Search
  const preOrderData = [];
  const inOrderData = [];
  const postOrderData = [];

  // Recursive preOrder traversal : root, left, right
  const preOrder = (root) => {
    if (root === null) return [];
    preOrderData.push(root.data);
    if (root.leftChild !== null) preOrder(root.leftChild);
    if (root.rightChild !== null) preOrder(root.rightChild);
    return preOrderData;
  };

  // Recursive inOrder traversal : left, root, right
  const inOrder = (root) => {
    if (root === null) return [];
    if (root.leftChild !== null) inOrder(root.leftChild);
    inOrderData.push(root.data);
    if (root.rightChild !== null) inOrder(root.rightChild);
    return inOrderData;
  };

  // Recursive postOrder traversal : left, right, root
  const postOrder = (root) => {
    if (root === null) return [];
    if (root.leftChild !== null) postOrder(root.leftChild);
    if (root.rightChild !== null) postOrder(root.rightChild);
    postOrderData.push(root.data);
    return postOrderData;
  };

  // Height is defined as the number of edges in the longest path from a given node to a leaf node
  const height = (node) => {
    if (node === null || !node) return -1;
    const left = height(node.leftChild);
    const right = height(node.rightChild);
    return Math.max(left, right) + 1;
  };

  // Depth is defined as the number of edges in the longest path from a given node to the tree’s root node
  const depth = (node) => {
    let level = -1;
    if (node === null || !node) return level;
    if (root.data === node.data) return level + 1;
    if (depth(root.leftChild) >= 0) return level + 1;
    if (depth(root.rightChild) >= 0) return level + 1;
    return level;
  };

  const array = [...new Set(mergeSort(inputArray))];
  const root = buildTree(array, 0, array.length - 1);

  return {
    array,
    root,
    insertVal,
    deleteVal,
    find,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    height,
    depth,
  };
};

export default Tree;
