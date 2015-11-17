//ercizi da consegnare il 17.11.15

//console.log(ex_1_F([1,2,3,7]));
//console.log(ex_3_F([5,1,2,3,4,5,6,7,8,9]));
//console.log(ex_8_F([1,2,3,4,5,6,7,8,9]));
//console.log(ex_9_F([1,2,3,7]));

/* 1°
 Dato un array di interi,
 restituire la loro somma
 fino a che non viene ritrovato un valore negativo.
 */
function ex_1_F(arr){
    sum = 0 ;
    arr.every(function(x){
        if(x>0)
            sum += x;
        return x > 0;
    });
    return sum;
}

/* 2°
 Dato un numero n,
 restituire la somma dei primi n numeri interi positivi dispari
 n*n lol!!
 */
function ex_2_F(n){

}

/* 3°
 Dato un array di 10 elementi, calcolarne la media
 */
function ex_3_F(arr){
    return arr.reduce(
            function(acc,x){
                return acc+x;
            },0)/10;
}

/* 4°
 Dato un intervallo [a, b] con a e b due interi positivi,
 restituire la somma di tutti i numeri compresi all’interno dell’intervallo, estremi inclusi.
 Nel caso che b fosse minore di a, calcolare la somma nell’intervallo [b,a]
 */
function ex_4_F(n,m){

}

/* 5°
 Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
 operatore somma.
 */
function ex_5_F(n,m){
}

/* 6°
 Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
 l’utilizzo dei soli operatori somma e sottrazione.
 */
function ex_6_F(n,m){

}

/* 7°
 Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero,
 tramite l’utilizzo dei soli operatori somma, sottrazione e della funzione mult.
 */

function ex_7_F(n,m){

}

/* 8°
 Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
 oggetti in un array bidimensionale n x n.
 */
function ex_8_F(arr){
    var mat = new Array(Math.sqrt(arr.length));
    for(var i= 0;i<mat.length;i++)
        mat[i]= arr.splice(0,mat.length);
return mat;
}

/* 9°
 Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
 elementi.
 */
function ex_9_F(arr){
    return arr.reverse();
}

/* 10°
 Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
 contenenti a.
 Iterativo - Spazio O(1) - Tempo O(n)
 Ricorsivo - Spazio O(n) - Tempo O(n)
 */
function ex_10_F(n,m){

}
/* 11°
 Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
 dispari precedano nello stesso ordine tutti gli elementi pari.
 */

function ex_11_F(n,m){

}
