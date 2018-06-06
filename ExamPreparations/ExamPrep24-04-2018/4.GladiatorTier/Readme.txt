© Software University Foundation. This work is licensed under the CC-BY-NC-SA license.
Follow us: Page 1 of 2
Problem 4 – Arena Tier
Pesho is a pro gladiator, he is struggling to become master of the Arena. // TODO some more story
You will receive several input lines in one of the following formats:
"{gladiator} -> {technique} -> {skill}"
"{gladiator} vs {gladiator}"
The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of every gladiator.
When you receive a gladiator and his technique and skill, add him to the gladiator pool, if he isn`t present, else add his technique or update his skill, only if the current technique skill is lower than the new value.
If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:
Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and the other is demoted from the tier -> remove him.
If they don`t have techniques in common, the duel isn`t happening and both continue in the Season.
You should end your program when you receive the command "Ave Cesar". At that point you should print the gladiators, ordered by total skill in desecending order, then ordered by name in ascending order. Foreach gladiator print their technique and skill, ordered desecending, then ordered by technique name in ascending order
Input / Constraints
You will receive an array of strings as a parameter to your solution.
 The input comes in the form of commands in one of the formats specified above.
 Gladiator and technique will always be one word string, containing no whitespaces.
 Skill will be an integer in the range [0, 1000].
 There will be no invalid input lines.
 The programm ends when you receive the command "Ave Cesar".
Output
 The output format for each gladiator is:
"{gladiator}: {totalSkill} skill"
"- {technique} <!> {skill}"
Scroll down to see examples.
© Software University Foundation. This work is licensed under the CC-BY-NC-SA license.
Follow us: Page 2 of 2
Examples Input Output Comments
Pesho -> BattleCry -> 400
Gosho -> PowerPunch -> 300
Stamat -> Duck -> 200
Stamat -> Tiger -> 250
Ave Cesar
Stamat: 450 skill
- Tiger <!> 250
- Duck <!> 200
Pesho: 400 skill
- BattleCry <!> 400
Gosho: 300 skill
- PowerPunch <!> 300
We order the gladiators by total skill points descending, then by name. We print every technique along its skill ordered descending by skill, then by technique name. Input Output
Pesho -> Duck -> 400
Julius -> Shield -> 150
Gladius -> Heal -> 200
Gladius -> Support -> 250
Gladius -> Shield -> 250
Pesho vs Gladius
Gladius vs Julius
Gladius vs Gosho
Ave Cesar
Gladius: 700 skill
- Support <!> 250
- Shield <!> 250
- Heal <!> 200
Pesho: 400 skill
- Duck <!> 400
Gladius and Pesho don`t have common technique, so the duel isn`t valid.
Gladius wins vs Julius /common technique: "Shield". Julius is demoted.
Gosho doesn`t exist so the duel isn`t valid.
We print every gladiator left in the tier.