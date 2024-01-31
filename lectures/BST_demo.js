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
}

let firstBST = new BST();
firstBST.addNode(new BSTNode(10));
console.log(firstBST);
firstBST.addNode(new BSTNode(20));
console.log(firstBST);
firstBST.addNode(new BSTNode(15));
console.log(firstBST);
console.log(firstBST.root.right.left);
firstBST.addNode(new BSTNode(5));
console.log(firstBST);


