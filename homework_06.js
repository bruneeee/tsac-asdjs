/**
 * Created by Nicolo on 24/11/2015.
 */



function merge(ar1,ar2){
    var result = [];
    var i1 = 0;
    var i2 = 0;

    while(i1 < ar1.length && i2 < ar2.length) {
        if(ar1[i1] < ar2[i2]) {
            result.push(ar1[i1]);
            i1++;
        } else {
            result.push(ar2[i2]);
            i2++;
        }
    }
    if (i1 < ar1.length) {
        result = result.concat(ar1.slice(i1))
    }
    if (i2 < ar2.length) {
        result = result.concat(ar2.slice(i2))
    }

    return result;
}

function merge2(a1,a2){
    var ris = [];
     while(a1.length>0 || a2.length>0){
        if(a1[0] < a2[0]){
            ris.push(a1[0]);
            a1 = a1.slice(1);
        }
        else{
            ris.push(a2[0]);
            a2 = a2.slice(1);
        }
    }
     return ris;
}
/** a quanto pare usando lo slice non funziona niente!!!
 *  uso quindi il merge dei ildirettore che a quanto pare funziona
 *  nonostante il merge preso da solo restituisca lo stesso risultato*/

function mergeSort(a) {
    if (a.length == 1) {
        return a;
    }
    else {
        var l = a.length / 2;
        var left = a.slice(0, Math.ceil(l));
        var destra = a.slice(Math.ceil(l));
        return merge(mergeSort(left), mergeSort(destra));
    }
}

function Node(i,left,right){
    this.item = i;
    this.l = left;
    this.r = right;
}
function BST (){
    this.root = null;
}

BST.prototype.add= function(item){
    if(this.root == null)
        this.root = new Node(item,null,null);
    else
        this.addNode(this.root,new Node(item,null,null))
};
BST.prototype.addNode= function(currentNode,newNode){
    if(newNode.item < currentNode.item){
        if(currentNode.l == null)
            currentNode.l = newNode;
        else
            return this.addNode(currentNode.l,newNode);
    }
    else{
        if(currentNode.r==null)
            currentNode.r = newNode;
        else
            return this.addNode(currentNode.r,newNode);
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