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
///////////////////////////////////////////////////////////

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


