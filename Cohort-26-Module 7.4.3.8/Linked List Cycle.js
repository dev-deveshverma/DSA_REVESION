const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    let temp = new LinkedListNode(head);
    while (head != null){
        if (head.next == null){
            return false;
        }
        if (head.next == temp)
        {
            return true;
        }
        let next = head.next;
 
        head.next = temp;
 
        head = next;
    }
 
    return false;
};