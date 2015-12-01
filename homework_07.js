/**
 * Created by Nicolo on 29/11/2015.
 */

function Stack(){
    this.myarray = [];
}

Stack.prototype.push = function(e){
    this.myarray.push(e);
};/*Aggiunge un elemento all'array*/
Stack.prototype.pop = function(){
    return this.myarray.pop();
};/*Ritorna l'ultimo elemento e lo toglie dall'array*/
Stack.prototype.peek = function(){
    return this.myarray[this.myarray.length -1];
};/*Ritorna l'ulltimo elemento ma lo mantiene*/
Stack.prototype.isEmpty = function(){
    return this.myarray.length == 0;
};/*Banale -.-"*/
Stack.prototype.reverse = function(){
    return this.myarray.reverse();
};/*Ritorna l'array invertito*/

function ex_1a(a){
    if(a.length==0)
        return 10;
    return 5*a[0] + ex_1a(a.slice(1));
}

function ex_1b(a){
    var sum=0;
    for(var i=0;i< a.length;i++)
        if(x%2==0)
            sum += a[i]*a[i];
    return sum;
}

function ex_2(myarray){
    return myarray
                    .filter(x => x%2 == 0)
                    .reduce((acc,x) => acc +x*x,0);
}

function ex_3(a){
    var pari = new Stack();
    var dispari = new Stack();
    var result = new Stack();

    for(var i=0;i< a.length;i++){
        if(a[i]%2 == 0)
            pari.push(a[i]);
        else
            dispari.push(a[i]);
    }

    while(!pari.isEmpty()&!dispari.isEmpty())
        result.push(pari.pop() * dispari.pop());
    return result;
}

function LinkedList(){
    this.head = null;
    this.size = 0;
}

function ListItem(e,p,n){
    this.item = e;
    this.next = n;
    this.prev = p;
}

LinkedList.prototype.add = function(index,e){
    var node = this.getNodeR(index);
    if(node != null){
        var item = new ListItem(e, node.prev, node);
        node.prev = item;
    }else{
    }
    this.size++;};
        var last = getNodeR(this.size - 1)
        var item = new ListItem(e, last, null);
        last.next = item;
LinkedList.prototype.addItem = function(previousIndex,previousItem,index,element) {
    if(++previousIndex < index && previousItem.next != null)
        this.addItem(previousIndex, previousItem.next, index, element);
    else
        previousItem.next = new ListItem(element, previousItem.next);
};
LinkedList.prototype.getNode = function(index){
    var item = this.head;
    for(var i = 0; i < index && item != null; i++)
        item = item.next;
    return item;
};
LinkedList.prototype.getNodeR = function(index) {
    function nodeR(node, i){
        if(i == index || node == null)
            return node;
        else
            return nodeR(node.next, i + 1);
    }

    return nodeR(this.head, 0);
};
LinkedList.prototype.get = function(index) {
    var node = this.getNodeR(index);
    if(node != null)
        return node.item;
    else
        return null;
}