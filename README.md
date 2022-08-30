# binary-search-tree

A JavaScript module that builds a balanced binary search tree from an array of numbers.

---

`Tree(array)` returns a balanced binary search tree (BST) with numerous methods available for use. These include:

- `insetVal(val)` & `deleteVal(val)` accept values and either add or remove them to the BST
- `find(node)` accepts a node and returns the node with the given value
- `levelOrder()` traverses the tree in breadth-first level order and prints each node's data
- `preOrder()`, `inOrder()`, and `postOrder()` each traverse the tree in their respective depth-first order and print the data to the console
- `height(node)` accepts a node and returns its height (number of edges in the longest path from a given node to a leaf node)
- `depth(node)` accepts a node and returns its depth (number of edges in the longest path from a given node to the tree’s root node)
- `isBalanced()` checks if the tree is balanced and returns true or false
- `reBalance()` re-balances an unbalanced tree

Module includes a simple `driver()` script which will initialize a new tree of random numbers and display its various methods.

---

Written via a TDD approach, using Jest.

Created as part of The Odin Project's Computer Science course on Binary Search Trees
