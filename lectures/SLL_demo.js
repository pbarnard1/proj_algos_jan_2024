class SLLNode {
    constructor(data, next = null) { // Node for our Singly Linked List - by default, not connected to any other notes (the "next" attribute)
        this.data = data;
        this.next = next;
    }
}

class SLL {
    constructor(firstNode = null) { // Allow the option of specifying a node for the head of the list, or none by default (null value)
        this.head = firstNode;
    }

    addNodeToFront(newData) {
        // Edge case: the list is empty - luckily, it works as is
        // Create a new node with the data
        let newNode = new SLLNode(newData);
        newNode.next = this.head; // Connect the new node to the list
        this.head = newNode; // Move the head to the new node (even if the head of the list is null)
        return this; // To allow for chaining
    }
}
// Create two new nodes
let firstNode = new SLLNode(10);
let secondNode = new SLLNode(15);
console.log(firstNode);
// Connect nodes
firstNode.next = secondNode;

console.log(firstNode);
console.log(firstNode.next);

// First true list
let mySLL = new SLL(); // Empty list
let mySLL2 = new SLL(firstNode);
console.log(mySLL.head);
console.log(mySLL2.head);
// Test adding nodes to the front of a list
mySLL2.addNodeToFront(5);
console.log(mySLL2);
mySLL.addNodeToFront(20).addNodeToFront(3);
console.log(mySLL);