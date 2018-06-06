© Software University Foundation. This work is licensed under the CC-BY-NC-SA license.
Follow us: Page 1 of 2
Problem 2 – Gladiator Inventory
As a gladiator, Pesho has cool Inventory. He loves to buy new equipment. You are given Pesho`s inventory with all of his equipment -> strings, separated by whitespace. Until you receive "Fight!" you will be receiving commands which Pesho does with his inventory.
You may receive the following commands:
 Buy {equipment}
 Trash {equipment}
 Repair {equipment}
 Upgrade {equipment}-{upgrade}
If you receive Buy command, you should add the equipment at last position in the inventory, but only if it isn`t bought already.
If you receive Trash command, delete the equipment if it exists.
If you receive Repair command, you should Repair the equipment if it exists and place it on last position.
If you receive Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}";
Input / Consrtaints
You will receive an array of strings. Each element of the array is a command.
 In the first input element, you will receive Pesho`s inventory – sequence of equipment names, separated by space.
 Each following element, until you receive "Fight!" will be a command.
Output
 As output you must print Pesho`s inventory.
Constraints
 The command will always be valid.
 The equipment and Upgrade will be strings and will contain any character, except '-'.
 Allowed working time / memory: 100ms / 16MB.
Scroll down to see examples.
© Software University Foundation. This work is licensed under the CC-BY-NC-SA license.
Follow us: Page 2 of 2
Examples Input Output Comment
SWORD Shield Spear
Buy Bag
Trash Shield
Repair Spear
Upgrade SWORD-Steel
Fight!
SWORD SWORD:Steel Bag Spear
We receive the inventory => SWORD, Shield, Spear
We Buy Bag => SWORD, Shield, Spear, Bag
Trash Shield => SWORD, Spear, Bag
Repair Spear => SWORD, Bag, Spear
We add Upgrade => SWORD, SWORD:Steel, Bag,Spear
We print the inventory.
SWORD Shield Spear
Trash Bow
Repair Shield
Upgrade Helmet-V
Fight!
SWORD Spear Shield