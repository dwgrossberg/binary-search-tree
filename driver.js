import Tree from "./Tree";

const driver = () => {
    const randomArray = Array.from({ length: 21 }, () => Math.floor(Math.random() * 40));
    const newTree = Tree(randomArray);
    console.log('new Tree initialized')
    console.log('is the new Tree balanced? ' + newTree.isBalanced());
    console.log('preOrder data: ' + newTree.preOrder());
    console.log('inOrder data: ' + newTree.inOrder());
    console.log('postOrder data: ' + newTree.postOrder());
    console.log('unbalancing the tree...(adding numbers 100, 101, 102)');
    newTree.insertVal(100);
    newTree.insertVal(101);
    newTree.insertVal(102);
    console.log('is the Tree balanced? ' + newTree.isBalanced());
    console.log('reBalancing the Tree');
    newTree.reBalance();
    console.log('is the updated Tree balanced? ' + newTree.isBalanced());
    console.log('updated preOrder data: ' + newTree.preOrder());
    console.log('updated inOrder data: ' + newTree.inOrder());
    console.log('updated postOrder data: ' + newTree.postOrder());
}

export default driver;