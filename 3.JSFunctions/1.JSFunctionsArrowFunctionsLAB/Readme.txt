Lab: Functions and Arrow Functions
Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni. Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/306.
Triangle of Stars
Write a JS function that outputs a triangle made of stars with variable size, depending on an input parameter. Look at the examples to get an idea.
The input comes as a single number argument.
The output is a series of lines printed on the console, forming a triangle of variable size.
Examples
Input	Output		Input	Output		Input	Output
1	*		2	*
**
*	 	5	*
**
***
****
*****
****
***
**
*
Square of Stars
Write a JS function that outputs a rectangle made of stars with variable size, depending on an input parameter. If there is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.
The input comes as a single number argument.
The output is a series of lines printed on the console, forming a rectangle of variable size
Examples
Input	Output		Input	Output		Input	Output		Input	Output
1	*	 	2	**
**	 	5	*****
*****
*****
*****
*****	 		*****
*****
*****
*****
*****
Palindrome
Write a JS function that checks if an input string is a palindrome.
The input comes as a single string argument.
The output is the return value of your function. It should be true if the string is a palindrome and false if it’s not.
Examples
Input	Output		Input	Output		Input	Output
haha	false		racecar	true	 	unitinu	true
Day of the Week
Write a JS function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
The input comes as a single string argument.
The output should be returned as a result of your program.
Examples
Input	Output		Input	Output		Input	Output
Monday	1	 	Friday	5	 	Frabjoyousday	error
Functional Calculator
Write a JS program that receives two variables and an operator and performs a calculation between the variables, using the operator. Store the different functions in variables and pass them to your calculator.
The input comes as three arguments – two numbers, and a string, representing the operator.
The output should be printed on the console.
Examples
Input	Output		Input	Output		Input	Output
2, 4, '+'	6	 	3, 3, '/'	1	 	18, -1, '*'	-18
Aggregate Elements
Write a JS program that performs and outputs different operations on an array of elements. Implement the following operations:
Sum(ai) - calculates the sum all elements from the input array
Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
Concat(ai) - concatenates the string representations of all elements from the array
The input comes as an array of number elements.
The output should be printed on the console on a new line for each of the operations.
Examples
Input	Output		Input	Output
[1, 2, 3]	6
1.8333
123	 	[2, 4, 8, 16]	30
0.9375
24816
*Words Uppercase
Write a JS program that extracts all words from a passed in string and converts them to upper case. The extracted words in upper case must be printed back on a single line concatenated by “, “.
The input comes as a single string argument - the text from which to extract and convert the words.
The output should be a single line containing the converted string.
Examples
Input	Output		Input	Output
'Hi, how are you?'	HI, HOW, ARE, YOU
	 	'hello'	HELLO

Hints
You may need to use a Regular Expression or alternatively check for all delimiters that can be found in a sentence (ex. “,”, “ “, “!”, “?” and so on).

