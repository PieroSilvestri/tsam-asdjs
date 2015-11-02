/**
 * Created by piero on 31/10/2015.
 */
/*                              COMPITI PER CASA DI PIERO SILVESTRI                                     */

/*
 Funzioni utili:
 */
function sumAll(myarray){
    if(myarray.length == 0){
        return 0;
    }
    else{
        return myarray[0] + sumAll(myarray.slice(1));
    }
}
/*
 Esercizio 1:
 Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
 */

//Iterativo
function sumwhileneg(myarray) {
    var tot = 0;
    for(i = 0; i < myarray.length; ++i) {
        var x = myarray[i];
        if (x < 0) {
            return tot;
        }
        tot += x;
    }
}

//Ricorsivo
function sumwhilenegR(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}
// Per Tiziano
function ex_1_I(x) {
    return sumwhileneg(x);
}

function ex_1_R(x) {
    return sumwhilenegR(x);
}


/*
 Esercizio 2
 Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
 */

//Iterativo
function sumOdd(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 *i;
    }
    return tot;
}

//Ricorsivo
function sumOddR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + sumOddR(n-1);
    }
}

// Per Tiziano
function ex_2_I(x) {
    return sumOdd(x);
}

function ex_2_R(x) {
    return sumOddR(x);
}

/*
 Esercizio 3
 Dato un array di 10 elementi, calcolarne la media
 */

//Iterativo
function avgAll(myarray) {
    var tot = 0;
    for(var i = 0; i < myarray.length; i++) {
        tot += myarray[i];
    }
    return tot / myarray.length;
}

//Ricorsivo
function avgAllRW(myarray) {
    if (myarray.length == 0) {
        return 0;
    } else {
        return myarray[0] + avgAllRW(myarray.slice(1));
    }
}

function avgAllR(myarray) {
    return avgAllRW(myarray) / myarray.length;
}

// Per Tiziano
function ex_3_I(x) {
    return avgAll(x);
}

function ex_3_R(x) {
    return avgAllR(x);
}

/*
 Esercizio 4
 Dato un intervallo [a, b] con a e b due interi positivi,
 restituire la somma di tutti i numeri compresi all段nterno dell段ntervallo, estremi inclusi.
 Nel caso che b fosse minore di a, calcolare la somma nell段ntervallo [b,a]
 */

//Iterativo
function sumInterval(a, b){
    var tot = 0;
    if(a < b){
        for(i = a; i <= b; i++){
            tot = tot + i;
        }
    }
    else{
        for(i = b; i<= a; i++){
            tot = tot + i;
        }
    }
    return tot;
}

//Ricorsivo
function sumIntervalR(a, b){
    if(a < b){
        if(b < a || b == a){
            return b;
        }
        else{
            return b + sumIntervalR(a, b-1);
        }
    }
    else{
        if(b > a || b == a){
            return b;
        }
        else{
            return a + sumInterval(a-1, b);
        }
    }
}

// Per Tiziano
function ex_4_I(x, y) {
    return sumInterval(x, y);
}

function ex_4_R(x) {
    return sumIntervalR(x);
}

/*
 Esercizio5
 Sicalcoliilprodottodiduenumeria,bmaggioriougualiazero,
 tramitel置tilizzodelsolo operatoresomma.
 */

//Iterativo
function mult(a, b){
    prodotto = 0;
    for(i = 0; i < b; i++){
        prodotto = prodotto + a;
    }
    return prodotto;
}

//Ricorsivo
function multR(a, b){
    if(b == 0){
        return 0;
    }
    else{
        return a + mult(a, b-1);
    }
}

// Per Tiziano
function ex_5_I(x, y) {
    return mult(x, y);
}

function ex_5_R(x, y) {
    return multR(x, y);
}

/*
 Esercizio6
 Sicalcoliladivisioneeilrestodelladivisionetraduenumeria,bmaggioriazero,
 tramite l置tilizzodeisolioperatorisommaesottrazione.
 */

//Iterativo
function div(a, b){
    dividendo = a;
    divisore = b;
    resto = 0;
    quoto = 0;
    if(dividendo < divisore){
        resto = dividendo;
    }
    else{
        do{
            dividendo = dividendo - divisore;
            quoto++;
        }while(dividendo >= divisore);
        resto = dividendo;
    }
    return quoto + ' resto ' + resto;
}

//Ricorsivo
function divR(a, b){
    if(a < b){
        console.log("Resto:\n" + a + "\nQuoziente: ");
        return 0;
    }
    else{
        return 1 + divR(a-b, b);
    }
}

// Per Tiziano
function ex_6_I(x, y) {
    return div(x, y);
}

function ex_6_R(x, y) {
    return divR(x, y);
}


/*
 Esercizio7
 Sicalcolilapotenza(x^y)diduenumerixymaggioriougualiazero,
 tramitel置tilizzodeisoli operatorisomma,sottrazioneedellafunzionemult.
*/

//Iterativo
function pow(a, b){
    var potenza = 1;
    for(var i = 0; i < b; i++){
        potenza = mult(potenza, a);
    }
    return potenza;
}

//Ricorsivo
function powR(a, b){
    if(b == 0){
        return 1;
    }
    else{
        return (mult(a, powR(a, (b-1))));
    }
}

// Per Tiziano
function ex_7_I(x, y) {
    return pow(x, y);
}

function ex_7_R(x, y) {
    return powR(x, y);
}


/*
 Esercizio8
 Datounarraycontenenten^2elementi,scrivereunalgoritmochepermettadiinseriretuttigli
 oggettiinunarraybidimensionalenxn.
 */

//Iterativo
function matrix(myarray){
    var n = Math.sqrt(myarray.length);
    var matrice = [[]];
    var cont = 0;
    for(var i = 0; i < n; i++){
        matrice[i] = [];
        for(var j = 0; j < n; j++){
            matrice[i][j] = myarray[cont];
            cont++;
        }
    }
    return matrice;
}

//Ricorsivo
function matrixR(myarray){
    return "Non so come si fa :(";
}

// Per Tiziano
function ex_8_I(x) {
    return matrix(x);
}

function ex_8_R(x) {
    return matrixR(x);
}


/*
 Esercizio9
 Datounalistadielementi,scrivereunalgoritmochepermettadi
 invertirel弛rdinedegli elementi.
*/

//Iterativo
function change(myarray){
    newArray = [];
    last = myarray.length-1;
    for(var i = 0; i < myarray.length; i++){
        newArray[last] = myarray[i];
        last--;
    }
    return newArray;
}

//Ricorsivo
function changeR(myarray){
    if(myarray.length == 0){
        return newarray;
    }
    else{
        return invertR(myarray.slice(1));
    }
}

// Per Tiziano
function ex_9_I(x) {
    return change(x);
}

function ex_9_R(x) {
    return changeR(x);
}

/*
Esercizio10
Datidueinteria,nmaggioridi0,
scrivereunalgoritmochecreaunlistadinelementi contenentia.
 */

//Iterativo
function replicate(a, b){
    myarray = [];
    for(var i = 0; i < b; i++){
        myarray[i] = a;
    }
    return myarray;
}

//Ricorsivo
function replicateR(a, b){
    if(b == 0){
        return '';
    }
    else{
        return a + replicateR(a, b-1);
    }
}

// Per Tiziano
function ex_10_I(x, y) {
    return replicate(x, y);
}

function ex_10_R(x, y) {
    return changeR(x, y);
}

/*
 Esercizio11
 DataunalistadiinteriA,
 siriordiniglielementidellalistainmodotalechetuttiglielementi
 dispariprecedanonellostessoordinetuttiglielementipari.
 */

//Iterativo
function changeOddFirst(myarray){
    newarray = [];
    last = myarray.length - 1;
    first = 0;
    for(var i = 0; i < myarray.length; i++){
        if(myarray[i] % 2 != 0){
            newarray[first] = myarray[i];
            first++;
        }
        else{
            newarray[last] = myarray[i];
            last--;
        }
    }
    return newarray
}

//Ricorsivo
function changeOddFirstR(myarray){
    return false;
}

// Per Tiziano
function ex_11_I(x) {
    return changeOddFirst(x);
}

function ex_11_R(x) {
    return changeOddFirstR(x);
}

