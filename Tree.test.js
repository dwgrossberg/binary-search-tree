/* eslint-disable no-undef */
import Tree from "../binary-search-tree/Tree";
import Node from "../binary-search-tree/Node";

const tree1 = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const tree2 = Tree([0.1, 0.7, -4, 23, 800, 0.9, 40, -3, 500, -7]);

describe("Tree factory methods", () => {
  test("happy path", () => {
    expect(Tree);
  });
  test("buildTree() can remove duplicate values and sort array into order", () => {
    expect(tree1.array).toStrictEqual([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);
    expect(tree2.array).toStrictEqual([
      -7, -4, -3, 0.1, 0.7, 0.9, 23, 40, 500, 800,
    ]);
  });
});
