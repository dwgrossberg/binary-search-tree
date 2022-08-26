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
          leftChild: undefined,
          rightChild: {
            data: 3,
            leftChild: undefined,
            rightChild: undefined,
          },
        },
        rightChild: {
          data: 5,
          leftChild: undefined,
          rightChild: {
            data: 7,
            leftChild: undefined,
            rightChild: undefined,
          },
        },
      },
      rightChild: {
        data: 67,
        leftChild: {
          data: 9,
          leftChild: undefined,
          rightChild: {
            data: 23,
            leftChild: undefined,
            rightChild: undefined,
          },
        },
        rightChild: {
          data: 324,
          leftChild: undefined,
          rightChild: {
            data: 6345,
            leftChild: undefined,
            rightChild: undefined,
          },
        },
      },
    });
    expect(tree2.root).toMatchObject({
      data: 0.7,
      leftChild: {
        data: -4,
        leftChild: { data: -7, leftChild: undefined, rightChild: undefined },
        rightChild: {
          data: -3,
          leftChild: undefined,
          rightChild: {
            data: 0.1,
            leftChild: undefined,
            rightChild: undefined,
          },
        },
      },
      rightChild: {
        data: 40,
        leftChild: {
          data: 0.9,
          leftChild: undefined,
          rightChild: {
            data: 23,
            leftChild: undefined,
            rightChild: undefined,
          },
        },
        rightChild: {
          data: 500,
          leftChild: undefined,
          rightChild: {
            data: 800,
            leftChild: undefined,
            rightChild: undefined,
          },
        },
      },
    });
  });
});
