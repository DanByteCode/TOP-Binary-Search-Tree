import { Node } from "./node-tree.js";
export function Tree(array = []) {
    let root = buildTree()
    function buildTree() {
        let main = null
        let nodes = []
        array.forEach(e => {main = insertRec(main, e)})
        storeBSTNodes(main, nodes)
        return buildTreeUtil(nodes, 0, nodes.length - 1);
    }
    
    function insertRec(root, data) {
        if (root == null) {
            root = new Node(data)
        } else if (data < root.data) {
            root.left = insertRec(root.left, data)
        } else if (data > root.data) {
            root.right = insertRec(root.right, data)
        }
        return root;
    }

    function storeBSTNodes(root, nodes) 
    {
        if (root == null) {return}
        storeBSTNodes(root.left, nodes)
        nodes.push(root)
        storeBSTNodes(root.right, nodes)
    }
   
    function buildTreeUtil(nodes, start, end) 
    {
        if (start > end) {return null}
        let mid = parseInt((start + end) / 2, 10);
        let node = nodes[mid]
        node.left = buildTreeUtil(nodes, start, mid - 1)
        node.right = buildTreeUtil(nodes, mid + 1, end)
        return node;
    }

    return { root }
}