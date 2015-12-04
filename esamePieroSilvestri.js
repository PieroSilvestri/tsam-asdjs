/* Esame JS - TSAM 04/12/2015 di Piero Silvestri */

/* Variabili e funzioni iniziali */

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


/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */


/* Prima di iniziare salvo in un nuovo array il mio array iniziale (è solo per comodità mia)*/

var myarray = initialArray();

/* Controllo che la somma degli elementi dell'array mi dia 11340 */

function somma(a){
    if(a.length == 0){
        return 0;
    } else{
        return a[0] + somma(a.slice(1));
    }
}

/* Passando alla mia funzione somma l'array iniziale ottengo effettivamente 11340 */


/* Esercizio esame - 1 */

function esamejs_1(b){ 
    if(b.length==0){ 
        return 0; 
    } else{ 
        if(b[0]==5070){ 
            return 1 + esamejs_1(b.slice(1)); 
        } else{
            return 0 + esamejs_1(b.slice(1));
        }
    } 
}

/* Passando alla mia funzione esamejs_2 l'array iniziale 
ottengo che ci sono 2 valori che corrispondono a 5070 */


/* Esercizio esame - 2 */

function esamejs_2(c){
    return Math.sqrt(c.filter(x => x%2 == 0 && x >=0).map(c => c * c).reduce((somma, x) => somma + x, 0));
}

/* Passando alla mia funzione esamejs_2 l'array iniziale
ottengo come valore un numero comprero tra 11.500.000 e 12.000.000 */

/* Esercizio esame - 3 */
/* Creazione dello stack */

function Stack() {
    var items = [];
    this.push = function(elemento){
        items.push(elemento);
    };
    this.pop = function(){
        return items.pop();
    };
    this.peek = function(){
        return items[items.length-1];
    };
    this.isEmpty = function(){
        return items.length == 0;
    };
}

function esamejs_3(d){

    var v = new Stack();
    var s = new Stack();
    var array = d.split(" ");
    
    for(var i = 0; i < array.length; i++){
        switch(array[i]){
            
            case '+':
                s.push('+');
                break;
                
            case '-':
                s.push('-');
                break;
                
            case '*':
                s.push('*');
                break;
                
            case '/':
                s.push('/');
                break;
                
            case '(':
                s.push('(');
                break;
            
            case ')':
                var num1 = parseInt(v.pop());
                var num2 = parseInt(v.pop());
                var segno = s.pop();
                s.pop();
                switch(segno){
            
                    case '+':
                        v.push(num2+num1);
                        break;
                
                    case '-':
                        v.push(num2-num1);
                        break;
                
                    case '*':
                        v.push(num2*num1);
                        break;
                
                    case '/':
                        v.push(num2/num1);
                        break;
                }
                break;
                
            default:
                v.push(array[i]);
                break;
        }
    }
    return v.pop();
}

/* Esercizio esame - 4 */

function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if (currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if (currentNode.right == null) {
            currentNode.right = new Node(e, null, null);
        } else {
            this.addNode(currentNode.right, e);
        }
    }
}

BST.prototype.add = function(e) {
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }
}

BST.prototype.searchNodeR = function(node, e) {
    
    if (node == null) {
        return null;
    } else {
        if (node.item == e) {
            return node;
        } else {
            if (e > node.item) {
                return this.searchNodeR(node.right, e)
            } else {
                return this.searchNodeR(node.left, e)
            }
        }
    }
}

BST.prototype.searchNode = function(e) {
    return this.searchNodeR(this.root, e);
}

BST.prototype.insertArray = function(array) {
    for(var i = 0; i < array.length; i++){
        this.add(array[i]);
    }
}

BST.prototype.maxNum = function(){
  return this.maxNumR(this.root);
}

BST.prototype.maxNumR = function(currentNode) {
  if(currentNode.right == null) {
      return currentNode.item;
    } else {
      return this.maxNumR(currentNode.right);
    } 
}
























