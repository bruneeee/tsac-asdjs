/**
 * Created by Nicolo on 24/11/2015.
 */



function merge(a1,a2){
    var ris = [a1.length + a2.length-2];
    for(var i=0;i<ris.length;i++){
        if(a1[0] <a2[0]){
            ris.push(a1.slice(0));}
        else{
            ris.push(a2.slice(0));}
    }
    return ris;
}