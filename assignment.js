import { Tree } from "./tree.js";
import { prettyPrint, generateArray } from "./BST-Utils.js";

const tree = new Tree(generateArray(10,0,100));

console.log("---INITIAL TREE---");
prettyPrint(tree.getRoot());
console.log("Balance: "+ tree.isBalanced());
console.log("Level Order: "+ tree.levelOrder());
console.log("PreOrder: "+ tree.preOrder());
console.log("InOrder: "+ tree.inOrder());
console.log("PostOrder: "+ tree.postOrder());
generateArray(5,100,500).forEach((a)=>{tree.insert(a)});

console.log("---ADDING VALUES---");
prettyPrint(tree.getRoot());
console.log("Balance: "+ tree.isBalanced());

console.log("---REBALANCING---");
tree.rebalance()
prettyPrint(tree.getRoot());
console.log("Balance: "+ tree.isBalanced());
console.log("Level Order: "+ tree.levelOrder());
console.log("PreOrder: "+ tree.preOrder());
console.log("InOrder: "+ tree.inOrder());
console.log("PostOrder: "+ tree.postOrder());