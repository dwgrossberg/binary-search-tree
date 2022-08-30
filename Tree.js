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

  const array = [...new Set(mergeSort(inputArray))];
  const root = buildTree(array, 0, array.length - 1);

  const insertVal = (val, rootNode = root) => {
    // base case - tree is empty
    if (rootNode === null) {
      rootNode = Node(val);
      return rootNode;
    }
    // otherwise recur down the tree
    if (val < rootNode.data) {
      rootNode.leftChild = insertVal(val, rootNode.leftChild);
    } else if (val > rootNode.data) {
      rootNode.rightChild = insertVal(val, rootNode.rightChild);
    }
    // return the unchanged root node
    return rootNode;
  };

  const deleteVal = (val, rootNode = root) => {
    // base case - tree is empty
    if (rootNode === null) return rootNode;
    // otherwise recur down the tree
    if (val < rootNode.data) {
      rootNode.leftChild = deleteVal(val, rootNode.leftChild);
    } else if (val > rootNode.data) {
      rootNode.rightChild = deleteVal(val, rootNode.rightChild);
    } // if val == root.data
    else {
      // if node has no children or one child
      if (rootNode.leftChild === null) {
        return rootNode.rightChild;
      } else if (rootNode.rightChild === null) {
        return rootNode.leftChild;
      } // for nodes with two children, find the inorder successor
      rootNode.data = minValue(rootNode.rightChild);
      // and delete the inorder successor
      rootNode.rightChild = deleteVal(rootNode.data, rootNode.rightChild);
    }
    return rootNode;
  };

  const minValue = (root) => {
    let minV = root.data;
    while (root.leftChild != null) {
      minV = root.leftChild.data;
      root = root.leftChild;
    }
    return minV;
  };

  const find = (val, rootNode = root) => {
    if (rootNode === null) return false;
    if (rootNode.data === val) return rootNode;
    if (rootNode.data > val) {
      return find(val, rootNode.leftChild);
    } else if (rootNode.data < val) {
      return find(val, rootNode.rightChild);
    }
    return rootNode;
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
  const preOrder = (rootNode = root) => {
    if (rootNode === null) return [];
    preOrderData.push(rootNode.data);
    if (rootNode.leftChild !== null) preOrder(rootNode.leftChild);
    if (rootNode.rightChild !== null) preOrder(rootNode.rightChild);
    return preOrderData;
  };

  // Recursive inOrder traversal : left, root, right
  const inOrder = (rootNode = root) => {
    if (rootNode === null) return [];
    if (rootNode.leftChild !== null) inOrder(rootNode.leftChild);
    inOrderData.push(rootNode.data);
    if (rootNode.rightChild !== null) inOrder(rootNode.rightChild);
    return inOrderData;
  };

  // Recursive postOrder traversal : left, right, root
  const postOrder = (rootNode = root) => {
    if (rootNode === null) return [];
    if (rootNode.leftChild !== null) postOrder(rootNode.leftChild);
    if (rootNode.rightChild !== null) postOrder(rootNode.rightChild);
    postOrderData.push(rootNode.data);
    return postOrderData;
  };

  // Height is defined as the number of edges in the longest path from a given node to a leaf node
  const height = (node) => {
    // base case
    if (node === null || !node || find(node) === false) return -1;
    return Math.max(height(node.leftChild), height(node.rightChild)) + 1;
  };

  // Depth is defined as the number of edges in the longest path from a given node to the tree’s root node
  const depth = (root, node) => {
    let level = -1;
    // base case
    if (root === null) return -1;
    // if node we are searching for is current node
    if (
      root === node ||
      // otherwise recursively search left tree for node
      (level = depth(root.leftChild, node)) >= 0 ||
      // or recursively search right tree for node
      (level = depth(root.rightChild, node)) >= 0
    ) {
      // then return the depth of the node
      return level + 1;
    }
    return level;
  };

  const isBalanced = (rootNode = root) => {
    // base case
    if (rootNode === null) return true;
    if (
      Math.abs(height(rootNode.leftChild - height(rootNode.rightChild))) <= 1 &&
      isBalanced(rootNode.leftChild) === true &&
      isBalanced(rootNode.rightChild) === true
    ) {
      return true;
    }
    return false;
  };

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
    isBalanced,
  };
};

export default Tree;
