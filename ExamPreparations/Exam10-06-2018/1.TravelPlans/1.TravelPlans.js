function solve(arr) {
    let sumGold = 0;
    let countSpecialized = 0;
    let countClumsy = 0;
    for (let str of arr) {
        let tokens = str.split(/ : /);
        let profession = tokens[0];
        let goldOffer = Number(tokens[1]);
        if ((profession === 'Programming') || (profession === 'Hardware maintenance') || (profession === 'Cooking') || (profession === 'Translating') || (profession === 'Designing')) {
            if (goldOffer < 200) {
                continue;
            }
            countSpecialized++;
            let moneyGets = goldOffer - 0.20 * goldOffer;
            sumGold += moneyGets;
            if (countSpecialized % 2 === 0) {
                sumGold += 200;
            }
        }
        else if ((profession === 'Driving') || (profession === 'Managing') || (profession === 'Fishing') || (profession === 'Gardening')) {
            sumGold += goldOffer;
        }
        else if ((profession === 'Singing') || (profession === 'Accounting') || (profession === 'Teaching') || (profession === 'Exam-Making') ||
            (profession === 'Acting') || (profession === 'Writing') || (profession === 'Lecturing') || (profession === 'Modeling') || (profession === 'Nursing')) {
            countClumsy++;
            if ((countClumsy % 3 === 0)&&(countClumsy % 2 !== 0)) {
                let money = goldOffer - 0.10 * goldOffer;
                sumGold += money;
            }
            else if ((countClumsy % 2 === 0) && (countClumsy % 3 !== 0)) {
                let moneyGets = goldOffer - 0.05 * goldOffer;
                sumGold += moneyGets;
            }
            else if ((countClumsy % 2 !== 0) && (countClumsy % 3 !== 0)){
                sumGold += goldOffer;
            }
            else if((countClumsy % 2 === 0)&&(countClumsy % 3 === 0)){
                let money = goldOffer - 0.10 * goldOffer;
                sumGold += money;
            }
        }
    }
    console.log(`Final sum: ${sumGold.toFixed(2)}`);
    if (sumGold < 1000) {
        console.log(`Mariyka need to earn ${(1000 - sumGold).toFixed(2)} gold more to continue in the next task.`)
    }
    else {
        console.log(`Mariyka earned ${(sumGold - 1000).toFixed(2)} gold more.`)
    }
}

solve(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);