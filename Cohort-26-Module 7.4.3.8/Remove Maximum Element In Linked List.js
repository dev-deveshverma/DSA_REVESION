const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMaximum = function (head) {
    let cur = head;
    let prev=head;
    let largest = head;
    let prevLargest = null;
    cur = cur.next;
    
    while(cur!=null){
        if(cur.data>=largest.data){
            prevLargest = prev;
            largest = cur;
        }
        prev = cur;
        cur= cur.next;
    }
    
    if(head == largest){
        head = head.next;
    }
    else{
        prevLargest.next = largest.next;
    }
    
    return head;
};