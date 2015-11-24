/**
 * Created by Nicolo on 20/11/2015.
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

/*Stack.prototype.toSt = function(){
    return this.myarray.toString();
};*/

function dec2bin(a){
    function rec(stack,n){
        if(n > 0){
            stack.push(n % 2);
            return rec(stack, Math.floor(n / 2));
        }
        return stack;
    }
    var str = "";
    var bin = rec(new Stack(),a).reverse();
    for(var i = bin.length-1 ; i>=0 ; i--)
        str += bin[i];
    return str;
}