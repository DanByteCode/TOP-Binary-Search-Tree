import { Tree } from "./tree.js";
import { prettyPrint } from "./BST-Utils.js";
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) 
console.log("---INITIAL TREE---");
prettyPrint(tree.getRoot())
tree.insert(20)
tree.insert(200)
tree.insert(50)
tree.deleteItem(67)
tree.deleteItem(23)
tree.deleteItem(8)
console.log("Inserting: 20, 200, 50");
console.log("Deleting: 30, 23, 8");
prettyPrint(tree.getRoot())
console.log("Find '5': "+ JSON.stringify(tree.find(5)))
console.log("Find '67': "+ tree.find(67))
console.log("Level Order: "+ tree.levelOrder())
console.log("PreOrder: "+ tree.preOrder())
console.log("InOrder: "+ tree.inOrder())
console.log("PostOrder: "+ tree.postOrder())
console.log("Heigth '4': "+ tree.height(tree.find(4)));
console.log("Depth '4': "+ tree.depth(tree.find(4)));
console.log("Balanced: "+ tree.isBalanced());

