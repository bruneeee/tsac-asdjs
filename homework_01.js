//ercizi da consegnare il 30.10.15

var array = [0,1,2,3,4,5,6,7,8,9];
var a = 3;
var b = 4;
var basearray = [b];
//var z = ex_1I(array);
//var z = ex_1_R(array);
//var z = ex_2I(a);
//var z = ex_2_R(a);
//var z = ex_3I(array);
//var z = ex_3_R(array);
//var z = ex_4I(a,b);
//var z = ex_4_R(a,b);
//var z = ex_5I(a,b);
//var z = ex_5_R(a,b);
//var z = ex_6I(a,b);
//var z = ex_6_R(a,b);
//var z = ex_7I(a,b);
//var z = ex_7_R(a,b);
//var z = ex_8I(array);
//
//var z = ex_9I(array);
//var z = ex_9_R(array,0);
//var z = ex_10I(a,b);
//var z = ex_10_R(a,b,basearray);
//
//

console.log(z);

/* 1°
Dato un array di interi, 
restituire la loro somma 
fino a che non viene ritrovato un valore negativo.
Iterativo - Spazio O(1) - Tempo O(n)
Ricorsivo - Spazio O(n) - Tempo O(n)
*/
function ex_1_I(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i] >= 0)
            sum += arr[i];
        else
            return sum;
    }
    return sum;
}
function ex_1_R(arr){
	if(arr[0] >= 0 )
		return arr[0] + ex_1_R(arr.slice(1));
	return 0;
}

/* 2°
Dato un numero n, 
restIuire la somma dei p_Rmi n numeri interi positivi dispari
n*n lol!!
Iterativo - Spazio O(1) - Tempo O(n)
Ricorsivo - Spazio O(n) - Tempo O(n)
*/
function ex_2_I(n){
	var sum =0;
	for(var i=0;i<n;i++){
		sum += i*2 +1;
	}
	return sum;
}
function ex_2_R(n){
	if(n<=0)
		return 0;
	return ex_2_R(--n) + n*2 +1 ;
}

/* 3°
Dato un array di 10 elementi, calcolarne la media
Iterativo - Spazio O(1) - Tempo O(n)
Ricorsivo - Spazio O(n) - Tempo O(n)
*/
function ex_3_I(arr){
	var sum = 0;
    for(var i=0;i<arr.length;i++)/*array sempre di 10 elementi for(var i=0;i<10;i++)*/
    {
        sum += arr[i];
    }
    return sum/arr.length;
}
function ex_3_R(arr){
	if(arr[0] >= 0 )
		return arr[0]/10 + ex_1_R(arr.slice(1))/10;
	else
		return 0;
}

/* 4°
Dato un intervallo [a, b] con a e b due interi positivi,
restituire la somma di tutti i numeri compresi all’interno dell’intervallo, estremi inclusi.
Nel caso che b fosse minore di a, calcolare la somma nell’intervallo [b,a]
Iterativo - Spazio O(1) - Tempo O(n)
Ricorsivo - Spazio O(n) - Tempo O(n)
*/
function ex_4_I(n,m){
	/*if(n>m)
		return ex_4It(m,n);*/
	var sum=0;
	if(n>m){
		while(n>=m){
			sum += n;
			n--;
		}
	}
	else{
		while(n<=m){
			sum += n;
			n++;
		}
	}
	return sum;
}
function ex_4_R(n,m){
	if(n>m)
		return ex_4_R(m,n);
	else if(n<m)
		return n + ex_4_R(++n,m);
	else
		return m;
}

/* 5°
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
Iterativo - Spazio O(1) - Tempo O(n)
Ricorsivo - Spazio O(n) - Tempo O(n)
*/
function ex_5_I(n,m){
	sum = 0;
	for(var i=0;i<m;i++){
		sum += n;
	}
	return sum;
}
function ex_5_R(n,m){
	if(n>0)
		return m + ex_5_R(--n,m);
	return 0;
}

/* 6°
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l’utilizzo dei soli operatori somma e sottrazione.
Iterativo - Spazio O(1) - Tempo O(n)
Ricorsivo - Spazio O(n) - Tempo O(n)
*/
function ex_6_I(n,m){
	var ris = 0;
	while (n>m){
		ris++;
		n -= m;
	}
	console.log(ris);
	console.log(n);
	return 0;
}
function ex_6_R(n,m){
	if(n>m){
		n-=m;
		return 1+ ex_6_R(n,m);
	}
	console.log(n);
	return 0;
}

/* 7°
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero,
 tramite l’utilizzo dei soli operatori somma, sottrazione e della funzione mult.
 Iterativo - Spazio O(1) - Tempo O(n)
Ricorsivo - Spazio O(n) - Tempo O(n)
*/

function ex_7_I(n,m){
	sum = 1;
	for(var i=0;i<m;i++)
		sum *= n;
	return sum;
}

function ex_7_R(n,m){
	if(m>0){
		return n*ex_7_R(n,--m);
	}
	return 1;
}

/* 8°
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
Iterativo - Spazio O(1) - Tempo O(n)
*/
function ex_8_I(arr){
	var mat = new Array(Math.sqrt(arr.length));
	for(var l= 0;l<mat.length;l++)
		mat[l]=new Array(Math.sqrt(arr.length));

		var k =0;
		for(var i=0;i<Math.sqrt(arr.length);i++)
			for(var j=0;j<Math.sqrt(arr.length);j++)
				mat[i][j] = arr[k++];
	return mat;
}
function ex_8_R(arr){
	return 0;
}

/* 9°
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
elementi.
Iterativo - Spazio O(1) - Tempo O(n)
Ricorsivo - Spazio O(n) - Tempo O(n)
*/
function ex_9_I(arr){
	var app;
	for(var i=0;i<arr.length/2;i++){
		app = arr[i];
		arr[i]=arr[arr.length-1-i];
		arr[arr.length-1-i] = app; 
	}
	return arr;
}
function ex_9_R(arr,i){
	if(i<arr.length/2){
		var app;
		app = arr[i];
		arr[i]=arr[arr.length-1-i];
		arr[arr.length-1-i] = app; 
		return ex_9_R(arr,++i);
	}
	return arr;
}

/* 10°
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
contenenti a.
Iterativo - Spazio O(1) - Tempo O(n)
Ricorsivo - Spazio O(n) - Tempo O(n)
*/
function ex_10_I(n,m){
	var arr = [m];
	for(var i=0;i<m;i++)
		arr[i] = n;
	return arr;
}
function ex_10_R(n,m,arr){
	if(m>0){
		arr[m-1] = n;
		//arr[--m] = n; non funziona!
		return ex_10_R(n,--m,arr);
	}
	return arr;
}
/* 11°
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
*/
