/* eslint-disable no-undef */
import Tree from "../binary-search-tree/Tree";
import Node from "../binary-search-tree/Node";

const tree = Tree();

describe("Tree factory methods", () => {
  test("happy path", () => {
    expect(Tree);
  });
  test("buildTree() can remove duplicate values and sort array into order", () => {
    expect(
      tree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
    ).toStrictEqual([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);
  });
});
