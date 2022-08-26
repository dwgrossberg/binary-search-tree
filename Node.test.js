/* eslint-disable no-undef */
import Node from "../binary-search-tree/Node";

describe("Node factory properties", () => {
  test("happy path", () => {
    expect(Node);
  });
  test("Node(data) factory returns an object with keys data, leftChild, rightChild", () => {
    expect(Node("data")).toStrictEqual({
      data: "data",
      leftChild: null,
      rightChild: null,
    });
  });
});
