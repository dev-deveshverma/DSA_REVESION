const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    let node=new LinkedListNode(data);
    node.next=head;
    head=node;
    return head;
    
}