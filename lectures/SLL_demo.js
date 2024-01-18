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

    // Display all the values in the list
    printList() {
        // Start our runner at the beginning of the list
        let runner = this.head;
        while (runner !== null) { // While we're still pointing to a node (don't need to know what's ahead - so no ".next")
            // Print the value in the current node that the runner is pointing to at this moment
            console.log(runner.data);
            runner = runner.next; // Move the runner to the next node (if possible)
        }
    }

    // Add a node to the end of the list
    addNodeToBack(newData) {
        let newNode = new SLLNode(newData); // Create new node with the given data
        let runner = this.head; // Start at the beginning of the list
        // Edge case: the list is empty (i.e. the runner - or the head - is null)
        if (runner === null) {
            this.head = newNode; // Make the new node the head of the list
            return this; // Stop method and allow for chaining immediately
        }
        // Implicit else block: the list is not empty initially, so add to the back
        while (runner.next !== null) { // While we haven't hit the end of the list
            runner = runner.next; // Move to the next node
        }
        // Attach the new node to the end of the list
        runner.next = newNode;
        return this;
    }

    // Remove a node from the front and return its value
    removeFromFront() {
        if (this.head === null) { // Edge case: list is empty
            return null;
        }
        let currentNode = this.head;
        this.head = this.head.next; // Or currentNode.next - regardless, we're moving the head of the list
        currentNode.next = null; // Disconnect original head from list
        return currentNode.data; // Return current value from removed node
    }

    // Remove a node from the back of the list and return its value
    removeFromBack() {
        if (this.head === null) { // Edge case: list is empty
            return null;
        } else if (this.head.next === null) { // Edge case: list has only one item
            let removedNode = this.head;
            this.head = null; // List is now empty - so the head is null
            return removedNode.data;
        }
        let runner = this.head;
        // Move the runner to the second to last node
        while (runner.next.next !== null) {
            runner = runner.next;
        }
        let removedNode = runner.next; // Hold on to last node
        runner.next = null; // Disconnect the last node
        return removedNode.data;
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
// mySLL.addNodeToFront(20).addNodeToFront(3);
// console.log(mySLL);
mySLL2.printList();
mySLL2.addNodeToBack(35);
mySLL2.printList();
console.log("Removed value = " + mySLL2.removeFromBack());
mySLL2.printList();
// Testing for an empty list
let mySLL3 = new SLL();
mySLL3.printList();
console.log("Removed value = " + mySLL3.removeFromBack());
mySLL3.printList();
// Testing for a list of 1 item
let mySLL4 = new SLL();
mySLL4.addNodeToBack(12);
mySLL4.printList();
console.log("Removed value = " + mySLL4.removeFromBack());
mySLL4.printList();
