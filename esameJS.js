/**
 * Created by Nicolo on 04/12/2015.
 */
function initialArray() {
    var seed = 1;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return Math.floor(x);
    }

    var a = [];
    for(var i = 0; i < 10000; ++i) {
        a.push(random());
    }
    return a;
}
var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];
function evaluateExpr(callback) {
    return callback(_0xd10d[0]);
}

/**
 *  Inizio Metodi per implementare Alberi  e Pile
 */

function Node(i,left,right){
    this.item = i;
    this.l = left;
    this.r = right;
}
function BST (){
    this.root = null;
}

BST.prototype.add = function(item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
};
BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
        if (currentNode.l == null)
            currentNode.l = newNode;
        else
            this.addNode(currentNode.l, newNode);
    } else {
        if (currentNode.r == null)
            currentNode.r = newNode;
        else
            this.addNode(currentNode.r, newNode);
    }
};

function inOrder(tree, callback){
    if (tree != null){
        inOrder(tree.l, callback);
        callback(tree.item);
        inOrder(tree.r, callback);
    }
}
function preOrder(tree, callback){
    if (tree != null){
        callback(tree.item);
        inOrder(tree.l, callback);
        inOrder(tree.r, callback);
    }
}
function postOrder(tree, callback){
    if (tree != null){
        inOrder(tree.l, callback);
        inOrder(tree.r, callback);
        callback(tree.item);
    }
}
function search(node,e){
    if(node == null)
        return false;
    if(e == node.item)
        return true;
    else {
        if (e < node.item)
            return search(node.l, e);
        else
            return search(node.r, e);
    }
}
function searchNode(node, e) {
    if (node == null || node.item == e)
        return node;
    else if (e < nodo.item)
        return searchNode(node.l, e);
    else
        return searchNode(node.r, e);
}

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

/**
 *  Fine Metodi per implementare Alberi  e Pile
 */

/**----Esercio 1----*/
function rec(array){
    if(array.length > 0){
        if(array[0] == 5070)
            return 1 + rec(array.slice(1));
        return rec(array.slice(1));
    }
    return 0;
}
/**----Esercizio 2----*/
function es2(array){
    var a = array.filter(x => x%2 == 0& x > 0)
        .map(x => x*x)
        .reduce((acc,x) => acc +x,0);
    return Math.sqrt(a);
}
/**----Esercizio 3----*/
function evaluate(str){
    var v = new Stack();
    var s = new Stack();
    var eq = str.split(" ");
    for (var i = 0; i < eq.length; i++) {
        if(eq[i] == ")"){
            num2 = v.pop();
            num1 = v.pop();
            switch (s.pop()){
                case "+":
                    v.push(num1+num2);
                    break;
                case "-":
                    v.push(num1-num2);
                    break;
                case "*":
                    v.push(num1*num2);
                    break;
                case "/":
                    v.push(num1/num2);
                    break;
            }
        }
        else //inserisci il valore
            switch (eq[i]) {
            case "+":
                s.push(eq[i]);
                break;
            case "-":
                s.push(eq[i]);
                break;
            case "*":
                s.push(eq[i]);
                break;
            case "/": //controllare
                s.push(eq[i]);
                break;
            case "(":
                break;
            default:
                v.push(parseFloat(eq[i]));
                break;
        }
    }
    return v.peek();
}
/**----Esercizio 4----*/
function addtree(array){
    var albero = new BST();
    for(var i = 0; i < array.length; i++)
        albero.add(array[i]);
    return max(albero.root);
}
function max(tree){
    if(tree.r == null && tree.l == null)
        return tree.item;
    else if(tree.r != null)
        return max(tree.r);
    else
        return max(tree.l);
}