/* eslint-disable no-undef */
import Tree from "../binary-search-tree/Tree";
import Node from "../binary-search-tree/Node";

const tree1 = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const tree2 = Tree([0.1, 0.7, -4, 23, 800, 0.9, 40, -3, 500, -7]);

describe("Tree factory properties & methods", () => {
  test("happy path", () => {
    expect(Tree);
  });
  test("Tree.array property will remove duplicate values and sort array into order", () => {
    expect(tree1.array).toStrictEqual([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);
    expect(tree2.array).toStrictEqual([
      -7, -4, -3, 0.1, 0.7, 0.9, 23, 40, 500, 800,
    ]);
  });
  test("Tree.buildTree(array, start, end) will generate a balanced binary search tree of node objects", () => {
    expect(tree1.root).toMatchObject({
      data: 8,
      leftChild: {
        data: 4,
        leftChild: {
          data: 1,
          leftChild: null,
          rightChild: {
            data: 3,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 5,
          leftChild: null,
          rightChild: {
            data: 7,
            leftChild: null,
            rightChild: null,
          },
        },
      },
      rightChild: {
        data: 67,
        leftChild: {
          data: 9,
          leftChild: null,
          rightChild: {
            data: 23,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 324,
          leftChild: null,
          rightChild: {
            data: 6345,
            leftChild: null,
            rightChild: null,
          },
        },
      },
    });
  });
  test("insertVal(root, value) correctly inserts a new value as a child of a leaf node", () => {
    tree1.insertVal(tree1.root, 93);
    expect(tree1.root).toMatchObject({
      data: 8,
      leftChild: {
        data: 4,
        leftChild: {
          data: 1,
          leftChild: null,
          rightChild: {
            data: 3,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 5,
          leftChild: null,
          rightChild: {
            data: 7,
            leftChild: null,
            rightChild: null,
          },
        },
      },
      rightChild: {
        data: 67,
        leftChild: {
          data: 9,
          leftChild: null,
          rightChild: {
            data: 23,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 324,
          leftChild: {
            data: 93,
            leftChild: null,
            rightChild: null,
          },
          rightChild: {
            data: 6345,
            leftChild: null,
            rightChild: null,
          },
        },
      },
    });
  });
  test("deleteVal(root, val) correctly removes a leaf node and a node with one child", () => {
    tree1.deleteVal(tree1.root, 3);
    tree1.deleteVal(tree1.root, 5);
    expect(tree1.root).toMatchObject({
      data: 8,
      leftChild: {
        data: 4,
        leftChild: {
          data: 1,
          leftChild: null,
          rightChild: null,
        },
        rightChild: {
          data: 7,
          leftChild: null,
          rightChild: null,
        },
      },
      rightChild: {
        data: 67,
        leftChild: {
          data: 9,
          leftChild: null,
          rightChild: {
            data: 23,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 324,
          leftChild: {
            data: 93,
            leftChild: null,
            rightChild: null,
          },
          rightChild: {
            data: 6345,
            leftChild: null,
            rightChild: null,
          },
        },
      },
    });
  });
  test("delete(root, val) correctly removes a node with two children", () => {
    tree1.deleteVal(tree1.root, 324);
    expect(tree1.root).toMatchObject({
      data: 8,
      leftChild: {
        data: 4,
        leftChild: {
          data: 1,
          leftChild: null,
          rightChild: null,
        },
        rightChild: {
          data: 7,
          leftChild: null,
          rightChild: null,
        },
      },
      rightChild: {
        data: 67,
        leftChild: {
          data: 9,
          leftChild: null,
          rightChild: {
            data: 23,
            leftChild: null,
            rightChild: null,
          },
        },
        rightChild: {
          data: 6345,
          leftChild: {
            data: 93,
            leftChild: null,
            rightChild: null,
          },
          rightChild: null,
        },
      },
    });
  });
  test("find() accepts a value and returns a node with the given value", () => {
    expect(tree1.find(tree1.root, 6345)).toMatchObject({
      data: 6345,
      leftChild: {
        data: 93,
        leftChild: null,
        rightChild: null,
      },
      rightChild: null,
    });
  });
  test("levelOrder(callback) returns each node's data level by level", () => {
    expect(tree1.levelOrder()).toStrictEqual([8, 4, 67, 1, 7, 9, 6345, 23, 93]);
    expect(tree2.levelOrder()).toStrictEqual([
      0.7, -4, 40, -7, -3, 0.9, 500, 0.1, 23, 800,
    ]);
  });
  test("preOrder(root) returns each node's data in preorder (root, left, right)", () => {
    expect(tree1.preOrder(tree1.root)).toStrictEqual([
      8, 4, 1, 7, 67, 9, 23, 6345, 93,
    ]);
    expect(tree2.preOrder(tree2.root)).toStrictEqual([
      0.7, -4, -7, -3, 0.1, 40, 0.9, 23, 500, 800,
    ]);
  });
  test("inOrder(root) returns each node's data in inorder ( left, root, right)", () => {
    expect(tree1.inOrder(tree1.root)).toStrictEqual([
      1, 4, 7, 8, 9, 23, 67, 93, 6345,
    ]);
    expect(tree2.inOrder(tree2.root)).toStrictEqual([
      -7, -4, -3, 0.1, 0.7, 0.9, 23, 40, 500, 800,
    ]);
  });
  test("postOrder(root) returns each node's data in postorder ( left, right, root)", () => {
    expect(tree1.postOrder(tree1.root)).toStrictEqual([
      1, 7, 4, 23, 9, 93, 6345, 67, 8,
    ]);
    expect(tree2.postOrder(tree2.root)).toStrictEqual([
      -7, 0.1, -3, -4, 23, 0.9, 800, 500, 40, 0.7,
    ]);
  });
});
