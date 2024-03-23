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


/*
Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.
Confirm that the tree is balanced by calling isBalanced.
Print out all elements in level, pre, post, and in order.
Unbalance the tree by adding several numbers > 100.
Confirm that the tree is unbalanced by calling isBalanced.
Balance the tree by calling rebalance.
Confirm that the tree is balanced by calling isBalanced.
Print out all elements in level, pre, post, and in order.
*/