// Ryan Postma
// CMP344
// 1/28/15
// infix to postfix converter application

//////////////////////////////////////

function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
	this.empty = empty;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top-1];
}

function length() {
	return this.top;
}

function clear() {
	this.top = 0;
}

function empty() {
	return((this.top == 0)? true : false);
}

///////////////////////////////////////////////////////////
function printArr(stackArr) {
	for (var i = 0; i < stackArr.length; i++) {
		return stackArr[i];
	}
}	

function push_stack(stackArr,ele)
{
	 stackArr[stackArr.length]=ele;
}

function pop_stack(stackArr)
{
	 var temp=stackArr[stackArr.length-1];
	  //delete stackArr[stackArr.length-1];
	   //stackArr.length--;
	    return(temp);
}

function topStack(stackArr)
{
	 return(stackArr[stackArr.length-1]);
}

function isEmpty(stackArr)
{
	 return((stackArr.length==0)? true : false);
}
///////////////////////////////////////////////////////////

//this checks to see if it is an operator or an operand
function isOperand(op) {
	return(!isOperator(op)? true : false);
}

//this checks for operators
function isOperator(op) {
	return((op == '+' || op == '-' || op == '*' || op == '/' || op == '(' || op == ')')? true : false);
}

//check for the precedence
function prcd(op1, op2) {
	var op1Index, op2Index;
	var def_prcd = '-+*/';
	for (var i = 0; i < def_prcd.length; i++) {
		if (op1 == def_prcd.charAt(i)) op1Index = i;
		if (op2 == def_prcd.charAt(i)) op2Index = i;
	}
	if (((op1Index == 0) ||(op1Index == 1)) && (op2Index > 1))
		return false;
	else return true;
}

//go from postfix to infix notation
function postfixToInfix (exp) {
	var stackArr = new Array();
	exp = exp.split('');
	for (var i = 0; i < exp.length; i++) {
		if (isOperand(exp[i])) {
			push_stack(stackArr,exp[i]);
		}
		else {
			var temp = topStack(stackArr);
			pop_stack(stackArr);
			var pushVal = topStack(stackArr) + exp[i] + temp;
			pop_stack(stackArr);
			push_stack(stackArr,pushVal);
		}
	}
	return (stackArr.valueOf());
}


print(postfixToInfix('(5+8)*3'));

///////////////////////////////////////////////////////////
/*
var operand = new Stack();
var operator = new Stack();

function readElement(element) {
	for (var i = 0; i < element.length; ++i) {
		if ((element[i] == '(') || (element[i] == ')') || (element[i] =='*') || (element[i] == '/') || (element[i] == '+') || (element[i] == '-')) {
			operator.push(element[i]);
		}
		else {
		operand.push(element[i]);
		}
	}
	return operator.dataStore && operand.dataStore;
}

print(readElement("(3*5)+5-2*6"));
*/

