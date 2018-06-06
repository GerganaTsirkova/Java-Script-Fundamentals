© Software University Foundation. This work is licensed under the CC-BY-NC-SA license.
Follow us: Page 1 of 1
Problem 1 – Gladiator Expenses
As a gladiator, Pesho has to repair his broken equipment when he loses a fight. His equipment consists of helmet, sword, shield and armor. You will receive the Pesho`s lost fights count.
Every second lost game, his helmet is broken.
Every third lost game, his sword is broken.
When both his sword and helmet are broken in the same lost fight, his shield also brakes.
Every second time, when his shield brakes, his armor also needs to be repaired.
You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment.
Input / Constraints
You will receive 5 parameters to your function:
 First parameter – lost fights count – integer in the range [0, 1000].
 Second parameter – helmet price - floating point number in range [0, 1000].
 Third parameter – sword price - floating point number in range [0, 1000].
 Fourth parameter – shield price - floating point number in range [0, 1000].
 Fifth parameter – armor price - floating point number in range [0, 1000].
Output
 As output you must print Pesho`s total expenses for new equipment: "Gladiator expenses: {expenses} aureus"
 Allowed working time / memory: 100ms / 16MB.
Examples Input Output Comment
7
2
3
4
5
Gladiator expenses: 16.00 aureus
Trashed helmet -> 3 times
Trashed sword -> 2 times
Trashed shield -> 1 time
Total: 6 + 6 + 4 = 16.00 aureus;
23
12.50
21.50
40
200
Gladiator expenses: 608.00 aureus