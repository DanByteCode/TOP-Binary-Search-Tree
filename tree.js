import { Node } from "./node-tree.js";
export function Tree(array = []) {
    let root = null
    buildTree(array)

    function buildTree(array) {
        let main = null
        array.forEach(e => { main = insert(e, main) })
        root = main
        rebalance()
    }
    function insert(data, node = root) {
        if (node == null) {
            node = new Node(data)
        } else if (data < node.data) {
            node.left = insert(data, node.left,)
        } else if (data > node.data) {
            node.right = insert(data, node.right)
        }
        return node;
    }
    function rebalance() {
        const nodeList = getArrayNodes()
        root = balanceTree(nodeList, 0, nodeList.length - 1);
    }
    function getArrayNodes(node = root, list = []) {
        if (node == null) { return }
        getArrayNodes(node.left, list)
        list.push(node)
        getArrayNodes(node.right, list)
        return list
    }
    function balanceTree(nodes, start, end) {
        if (start > end) { return null }
        let mid = parseInt((start + end) / 2, 10);
        let node = nodes[mid]
        node.left = balanceTree(nodes, start, mid - 1)
        node.right = balanceTree(nodes, mid + 1, end)
        return node;
    }
    function deleteItem(data, node = root) {
        if (node == null) {
            return node;
        }
        if (node.data > data) {
            node.left = deleteItem(data, node.left,);
            return node;
        } else if (node.data < data) {
            node.right = deleteItem(data, node.right,);
            return node;
        }
        if (node.left == null) {
            let temp = node.right;
            return temp;
        } else if (node.right == null) {
            let temp = node.left;
            return temp;
        }
        else {
            let succParent = node;
            let succ = node.right;
            while (succ.left != null) {
                succParent = succ;
                succ = succ.left;
            }
            if (succParent != node) {
                succParent.left = succ.right;
            } else {
                succParent.right = succ.right;
            }
            node.data = succ.data;
            return node;
        }
    }
    function find(data, node = root) {
        if (node == null) {
            return null
        } else if (data == node.data) {
            return node
        } else if (data < node.data) {
            node = find(data, node.left)
        } else if (data > node.data) {
            node = find(data, node.right, )
        }
        return node;
    }
    function orderIt(node, callback) {
        if (node == null) { return }
        const queue = [node]
        const res = []
        while (queue.length > 0) {
            let current = queue.shift()
            if (callback != undefined) {
                callback(current)
            } else {
                res.push(current.data)
            }
            if (current.left != null) {
                queue.push(current.left)
            }
            if (current.right != null) {
                queue.push(current.right)
            }
        }
        if (res.length > 0) { return res }
    }
    function inOrderRec(node, list = [], callback) {
        if (node == null) { return }
        else {
            inOrderRec(node.left, list)
            callback != undefined ? callback(node) : list.push(node.data)
            inOrderRec(node.right, list)
        }
        return list
    }
    function preOrderRec(node, list = [], callback) {
        if (node != null) {
            callback != undefined ? callback(node) : list.push(node.data)
            preOrderRec(node.left, list)
            preOrderRec(node.right, list)
            return list
        }
    }
    function postOrderRec(node, list = [], callback) {
        if (node == null) { return }
        else {
            postOrderRec(node.left, list)
            postOrderRec(node.right, list)
            callback != undefined ? callback(node) : list.push(node.data)
        }
        return list
    }
    function height(node = root, num = 0) {
        if (node == null) { return num }
        else {
            return Math.max(height(node.left, num + 1), height(node.right, num + 1))
        }
    }
    function depth(searchNode = root, currentNode = root, num = 1) {
        if (searchNode == null) {
            return null
        } else if (searchNode === currentNode) {
            return num
        } else if (searchNode.data < currentNode.data) {
            return depth(searchNode, currentNode.left, num + 1)
        } else if (searchNode.data > currentNode.data) {
            return depth(searchNode, currentNode.right, num + 1)
        }
    }
    function isBalanced() {
        const hLeft = height(root.left)
        const hRight = height(root.right)
        return hLeft - hRight <= 1 && hLeft - hRight >= -1
    }
    //Calls to the recursive Functions
    function levelOrder(callback) {
        return orderIt(root, callback)
    }
    function inOrder(callback) {
        return inOrderRec(root, [], callback)
    }
    function preOrder(callback) {
        return preOrderRec(root, [], callback)
    }
    function postOrder(callback) {
        return postOrderRec(root, [], callback)
    }
    return {
        root,
        buildTree,
        insert,
        deleteItem,
        find,
        levelOrder,
        inOrder,
        preOrder,
        postOrder,
        height,
        depth,
        isBalanced,
        rebalance
    }
}