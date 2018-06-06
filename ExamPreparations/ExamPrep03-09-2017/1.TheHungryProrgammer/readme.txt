© Software University Foundation (softuni.org). This work is licensed under the CC-BY-NC-SA license.
Follow us: Page 1 of 2
Problem 1 – The Hungry Programmer
You and your colleagues are on a teambuilding in the mountains. You have reached the closest mountain peak and now it is time to refresh with a meal. Unfortunately, the rest house is experiencing staff shortage so a helping hand with the serving is needed. You see an opportunity for abundant overeating and lend your help willingly.
Write a JavaScript program to help you calculate how many meals have you managed to snatch from the kitchen without being seen. The input is an array of strings containing the portions of meals for serving and a series of commands. In case you receive the command "Serve", you must serve the last portion in the line, removing it from the array and printing on the console "{meal name} served!". Upon receiving the "Eat" command, you must eat the first portion and print "{meal name} eaten" to the console. "Add" places the given portion at the beginning of the line. "Consume" – eat all portions in the given index range and print "Burp!" to the console. "Shift" – swap the portions at the given indexes. Upon receiving the command "End" the serving of plates is finished and you head over to consume your own portion of meal. Check if given indexes are valid.
The input consists of the commands described above, in the following format:
 Serve
 Add {meal}
 Shift {index} {index}
 Eat
 Consume {start index} {end index}
If a command does not match the pattern (unrecognized keyword, missing argument) it should be ignored.
Input
The input comes as two arrays. The first argument is an array of strings, containing portions of meals. The second argument is and array of strings, holding the commands that need to be parsed.
Output
On the first line print the remaining portions of meals in the array in the following format:
"Meals left: {meal1}, {meal2}, {meal3}, …"
In case there are no meals left, print "The food is gone". On the second line print the number of the eaten meals in the following format:
"Meals eaten: {count}"
© Software University Foundation (softuni.org). This work is licensed under the CC-BY-NC-SA license.
Follow us: Page 2 of 2
Examples
Input Output
['chicken', 'steak', 'eggs'],
['Serve',
'Eat',
'End',
'Consume 0 1']
eggs served!
chicken eaten
Meals left: steak
Meals eaten: 1
Input Output
['fries', 'fish', 'beer', 'chicken',
'beer', 'eggs'],
['Add spaghetti',
'Shift 0 1',
'Consume 1 4',
'End']
Burp!
Meals left: fries, beer, eggs
Meals eaten: 4
Input Output
['carrots', 'apple', 'beet'],
['Consume 0 2',
'End',]
Burp!
The food is gone
Meals eaten: 3