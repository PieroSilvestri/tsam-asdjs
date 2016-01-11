/*
 Esercizio 1:
 Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
 */

function sumUntilNegB(x){
    var tot = 0;
    x.every(function(x){
       if(x>0){
           tot += x;
       }
        return x>0; 
    });
    return tot;
}

/*
 Esercizio 2
 Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
 */

 function sumOdd(x){
     var tmparray= [];
    x.every(function(x){
        if (x>0){
            tmparray.push(x);
        }
        return x>0;
        }
    )
    return tmparray.reduce((acc,x) =>acc + x, 0);
 }

 /*
 Esercizio 3
 Dato un array di 10 elementi, calcolarne la media
 */

 function average(x){
     var tot = 0;
     x.every(function(x){
         if(x>0){
            tot += x;
         }
         return x>0;
     });
     return tot / 10;
 }

 /*
 Esercizio 4
 Dato un intervallo [a, b] con a e b due interi positivi,
 restituire la somma di tutti i numeri compresi all�interno dell�intervallo, estremi inclusi.
 Nel caso che b fosse minore di a, calcolare la somma nell�intervallo [b,a]
 */
function sumintervalF(a,b){
    var tarray=[]
    if (a < b){
        for (var i = a;i <= b ; i++){
            tarray[tarray.length]= i;
        }
        return tarray.reduce((acc,tarray) => acc+tarray,0);
    }else{
          for (var i = b;i <= a ; i++){
            tarray[tarray.length]= i;
        }
        return tarray.reduce((acc,tarray) => acc+tarray,0);
    }
}