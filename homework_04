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


function rpn(str){
    var st = new Stack();
    var ss = str.split(" ");
    for (var i = 0; i < ss.length; i++) {
        var ris = 0;
        var app = 0;
        switch (ss[i]) {
            case "+":
                app = st.pop();
                ris = st.pop() + app;
                st.push(ris);
                break;
            case "-":
                app = st.pop();
                ris = st.pop() - app;
                st.push(ris);
                break;
            case "*":
                app = st.pop();
                ris = st.pop() * app;
                st.push(ris);
                break;
            case "/": //controllare
                app = st.pop();
                ris = st.pop() / app;
                st.push(ris);
                break;
            default:
                st.push(parseFloat(ss[i]));
        }
    }
    return st.pop();
}
