/**
 * Created by Nicolo on 27/11/2015.
 */
/**
 * Created by Nicolo on 24/11/2015.
 */



function Queue(){
    this.queue = [];
}

Queue.prototype.enqueue = function (e){
    this.queue.unshift(e);
};
Queue.prototype.dequeue = function (){
    return this.queue.pop();
};
Queue.prototype.front = function (){
    return this.queue[this.queue.length -1];
};
Queue.prototype.isEmpty = function(){
    return this.size() == 0;
};
Queue.prototype.size = function(){
    return this.queue.length;
};



function PriorityQueue() {
    this.coda = [];
}

PriorityQueue.prototype.enqueue = function(val, prio) {
    var obj = {
        valore: val,
        priority: prio
    };
    var trovato = false;
    if(this.coda.length == 0)
        this.coda.push(obj);
    else {
        for (i = 0;i < this.coda.length && !trovato;i++) {
            if (obj.priority > this.coda[i].priority) {
                this.coda.splice(i, 0, obj);
                trovato = true;
            }
        }
    }
};
PriorityQueue.prototype.dequeue = function() {
    return this.coda.pop();
};
PriorityQueue.prototype.front = function() {
    return this.coda[this.coda.length - 1];
};
PriorityQueue.prototype.isEmpty = function() {
    return (this.coda.length == 0);
};
PriorityQueue.prototype.size = function() {
    return this.coda.length;
};



function PriorityQueueCallback(func) {
    this.coda = [];
    this.callback = func;
}

PriorityQueueCallback.prototype.enqueue = function(val, prio) {
    var obj = {
        valore: val,
        priority: prio
    };
    if(this.coda.length == 0)
        this.coda.push(obj);
    else {
        var i = 0;
        while (!this.callback(this.coda[i], obj )) {
            i++;
        }
        this.coda.splice(i, 0, obj);
    }
};
PriorityQueueCallback.prototype.dequeue = function() {
    return this.coda.pop();
};
PriorityQueueCallback.prototype.front = function() {
    return this.coda[this.coda.length - 1];
};
PriorityQueueCallback.prototype.isEmpty = function() {
    return (this.coda.length == 0);
};
PriorityQueueCallback.prototype.size = function() {
    return this.coda.length;
};



function CircularQueue(dim){
    this.n = dim;
    this.coda = [];
    this.primo = this.ultimo = this.dimension = 0;
}

CircularQueue.prototype.enqueue = function(item) {
    if (this.dimension == this.n)
        return 0;
    else {
        this.coda[this.ultimo] = item;
        this.ultimo = (this.ultimo + 1) % this.n;
        this.dimension++;
    }
};
CircularQueue.prototype.dequeue = function() {
    var item;
    if (this.dimension == 0)
        return item;
    else {
        item = this.coda[this.primo];
        this.primo = (this.primo + 1) % this.n;
        this.dimension--;
        return item;
    }
};
CircularQueue.prototype.front = function() {
    if (this.primo == this.ultimo)
        return 0;
    return this.coda[this.primo];
};
CircularQueue.prototype.isEmpty = function() {
    return (this.dimension == 0);
};
CircularQueue.prototype.size = function() {
    return this.dimension;
};