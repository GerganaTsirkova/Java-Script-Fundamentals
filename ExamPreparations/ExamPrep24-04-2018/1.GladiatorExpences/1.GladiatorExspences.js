function solve(fightCount, a, b, c, d) {
    let totalExpenses = 0;
    let helmetPrice = Number(a);
    let swordPrice = Number(b);
    let shieldPrice = Number(c);
    let armourPrice = Number(d);
    let countFights = Number(fightCount);
    let countShield = 0;
    for (let i = 1; i <= countFights; i++) {
        if (i % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (i % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if ((i % 3 === 0) && (i % 2 === 0)) {
            totalExpenses += shieldPrice;
            countShield++;
            if (countShield % 2 === 0) {
                totalExpenses += armourPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
solve(23,12.50,21.50,40,200);