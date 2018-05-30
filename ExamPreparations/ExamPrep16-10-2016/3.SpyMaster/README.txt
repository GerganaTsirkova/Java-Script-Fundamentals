Problem 3 - Spy Master
You are the spy master of a guild of spies, since you’re all carefully watched, your spies communicate with you by leaving encoded messages. You will receive a special key and lines of text which you must comb in order to find the encoded messages. 
The special key will consist only of one or more English letters.
•	The special key must be preceded by either a space or the start of the string in order to be considered valid in the string.
•	The special key may appear in any casing (its letters could be a random mix of lower and uppercase) in the lines of text.
Valid encoded messages must meet these requirements:
•	An encoded message must immediately follow the special key, being separated from it only by one or more spaces.
•	An encoded message must be at least 8 symbols long and consist only of the symbols !, %, $, # or Capital English letters.
•	The encoded message must be followed by a space, a dot (.), a comma (,) or the end of the string.
After finding the correct encoded messages, you must decode and replace them in the original text. The decoding should be as follows:
•	The symbol ! becomes the number 1
•	The symbol % becomes the number 2
•	The symbol # becomes the number 3
•	The symbol $ should become the number 4
•	Capital English letters should become their lower case counterparts
Constraints
•	A pair of a special key and encoded message will never be split between multiple lines.
•	The preceding space before a special key will never overlap with a trailing space after an encoded message.
•	There will never be an encoded message equal to the special key.
Input
The input comes as an array of strings - the first element is the special key, each element after it is a line of text.
Output
The output should be printed on the console - consisting of the entire text with the correct encoded messages replaced with their decoded versions, each line of text on a new line.
Examples
Input
specialKey
In this text the specialKey HELLOWORLD! is correct, but
the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while
SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!
Output
In this text the specialKey helloworld1 is correct, but
the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while
SpeCIaLkeY   som22eth4in and SPECIALKEY 33443344 are!
Input
enCode
Some messages are just not encoded what can you do?
RE - ENCODE THEMNOW! - he said.
Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.
Output
Some messages are just not encoded what can you do?
RE - ENCODE themnow1 - he said.
Damn encode, ITSALLHETHINKSABOUT, eNcoDe bull4312.

