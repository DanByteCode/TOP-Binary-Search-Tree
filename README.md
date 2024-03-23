# TOP-Binary-Search-Tree
This is a node-based data structure in which each entry can be connected to a pair of nodes.
This structure will add numbers in an orderly way.
## Functions
- `Tree(array)` when creating a new tree it can be initialized with an array of data and turns it into a balanced binary tree full of Node objects appropriately placed.
- `root` the main Node.
- `buildTree(array)` takes an array to replace the current tree.
- `insert(value)` insert a number into its respective node if it is not repeated.
- `deleteItem(value)` reorders the tree to remove the node that has the parameter value.
- `find(value)` returns the node with the given value if found in the tree, otherwise returns null.
- `levelOrder(callback)` function that accepts an optional callback function as its parameter. levelOrder traverse the tree in breadth-first level order and provide each node as an argument to the callback.
- `preOrder(callback)` `inOrder(callback)` `postOrder(callback)` this functions that also accept an optional callback as a parameter. Each of these functions traverse the tree in their respective depth-first order and yield each node to the provided callback.
- `height(node)` returns the given node’s height.
- `depth(node)` returns the given node’s depth. 
- `isBalanced()` return *true* if the tree is balanced.
- `rebalance()` rebalances an unbalanced tree.