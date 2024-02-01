class BSTNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(root = null) {
        this.root = root;
    }

    addNode(newNode) {
        // Edge case: the tree is empty
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        let runner = this.root;
        // Loop to travel through the tree until we can add the node
        while (runner) {
            if (newNode.data < runner.data) {
                if (runner.left == null) {
                    // Add the new node to the left
                    runner.left = newNode;
                    break; // Node added, so get out of the loop immediately
                } else { // Node exists, so move the runner
                    runner = runner.left;
                }
            } else {
                if (runner.right == null) {
                    // Add the new node to the right
                    runner.right = newNode;
                    break; // Node added, so get out of the loop immediately
                } else { // Node exists, so move the runner
                    runner = runner.right;
                }
            }
        }
        return this; // Allow for chaining
    }

    // Try to find a note with the given data - return true if it's found, and false if not found
    searchTree(data) {
        let runner = this.root; // Start at the root of the tree
        while (runner !== null) {
            if (data > runner.data) { // Move right
                runner = runner.right;
            } else if (data < runner.data) { // Move left
                runner = runner.left;
            } else { // We've found a node that has this data
                return true;
            }
        }
        return false; // Hit dead end - the node can't be found
    }

    // Get the height (depth) of the tree
    height(runner = this.root) { // Start at the root of the tree by default
        if (runner === null) { // If the runner has hit a dead end
            return 0;
        }
        let leftSubtreeDepth = this.height(runner.left); // Check depth to left of current node
        let rightSubtreeDepth = this.height(runner.right); // Check depth to right of current node
        return 1 + Math.max(leftSubtreeDepth,rightSubtreeDepth);
    }

    // Count the number of nodes in the tree
    size(runner = this.root) {
        // Base case: dead end
        if (runner === null) {
            return 0;
        }
        let leftTreeNodeCount = this.size(runner.left); // Count all nodes to the left
        let rightTreeNodeCount = this.size(runner.right); // Count all nodes to the right
        return 1 + leftTreeNodeCount + rightTreeNodeCount; // Add the current node, and the nodes to the left, and the nodes to the right
    }
}

let firstBST = new BST();
console.log(firstBST.searchTree(20)); // Returns false - the tree is empty
console.log(firstBST.height()); // Returns 0
console.log(firstBST.size());
firstBST.addNode(new BSTNode(10));
console.log(firstBST);
console.log(firstBST.size());
firstBST.addNode(new BSTNode(20));
console.log(firstBST);
firstBST.addNode(new BSTNode(15));
console.log(firstBST);
console.log(firstBST.root.right.left);
firstBST.addNode(new BSTNode(5));
console.log(firstBST);
// Testing searching the tree
console.log(firstBST.searchTree(15)); // true
console.log(firstBST.searchTree(8)); // false
console.log(firstBST.searchTree(10)); // true
// Testing the height and size of the tree
console.log(firstBST.height());
console.log(firstBST.size());


