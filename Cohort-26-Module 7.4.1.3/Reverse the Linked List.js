const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    var pre=null;
     var current =head;
     var next=current.next;
     while(next!=null){
         current.next=pre;
         pre=current;
         current=next;
         next=current.next;
     }
    current.next=pre;
    return current;
}