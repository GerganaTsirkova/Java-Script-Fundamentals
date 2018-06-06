function solve(arr) {
    let gladiatorPool = new Map();
    let gladiatorSkills = new Map();
    for (let str of arr) {
        if (str === 'Ave Cesar') {
            break;
        }
        let input = str.split(' ');
        if (input[1] === '->') {
            let gladiator = input[0];
            let technique = input[2];
            let skill = Number(input[4]);
            if (!gladiatorPool.has(gladiator)) {
                let innerMap = new Map();
                innerMap.set(technique, skill);
                gladiatorPool.set(gladiator, innerMap);
                if (!gladiatorSkills.has(gladiator)) {
                    gladiatorSkills.set(gladiator, skill);
                }
            }
            else {
                let innerMap = gladiatorPool.get(gladiator);
                if (!innerMap.has(technique)) {
                    innerMap.set(technique, skill);
                    if (gladiatorSkills.has(gladiator)) {
                        let old = gladiatorSkills.get(gladiator);
                        gladiatorSkills.set(gladiator, skill + old);
                    }
                }
                else {
                    let oldSkill = innerMap.get(technique);
                    if (oldSkill < skill) {
                        innerMap.get(technique).set(skill);
                        if (gladiatorSkills.has(gladiator)) {
                            let old = gladiatorSkills.get(gladiator) - oldSkill + skill;
                            gladiatorSkills.set(gladiator, skill + old);
                        }
                    }

                }
                gladiatorPool.set(gladiator, innerMap);
            }


        }
        else if (input[1] === 'vs') {
            let firstGladiator = input[0];
            let secondGladiator = input[2];
            if((!gladiatorPool.has(firstGladiator))||(!gladiatorPool.has(secondGladiator))){
                continue
            }
            let firstInner = gladiatorPool.get(firstGladiator);
            let keysFirst = Array.from(firstInner.keys());
            let secondInner = gladiatorPool.get(secondGladiator);
            let keysSecond = Array.from(secondInner.keys());
            for (let i = 0; i < keysFirst.length; i++) {
                let skillHas = keysFirst[i];
                if (keysSecond.includes(skillHas)) {
                    if (gladiatorPool.get(firstGladiator).get(skillHas) > gladiatorPool.get(secondGladiator).get(skillHas)) {
                        gladiatorPool.delete(secondGladiator);
                        gladiatorSkills.delete(secondGladiator);
                        break;
                    }
                    else if (gladiatorPool.get(firstGladiator).get(keysFirst[i]) < gladiatorPool.get(secondGladiator).get(keysFirst[i])) {
                        gladiatorPool.delete(firstGladiator);
                        gladiatorSkills.delete(firstGladiator);
                        break;
                    }
                }
            }
        }
    }

    let result = [...gladiatorSkills.entries()].sort((a,b)=>sorted(a,b));
    for (let [gladiator, s] of result) {
        console.log(`${gladiator}: ${s} skill`);
        let resultNext = [...gladiatorPool.get(gladiator).entries()].sort((a,b)=>sorted(a,b));
        for (let [tech, skill] of resultNext) {
            console.log(`- ${tech} <!> ${skill}`);
        }

    }
    function sorted(a,b) {
        if(b[1]>a[1]) return 1;
        else if(b[1]<a[1]) return -1;
        else return a[0].localeCompare(b[0]);
    }
    /*
    let result = [...gladiatorSkills.entries()]
        .sort((a, b) => b[1]-a[1])
        .sort((a, b) => a[0].localeCompare(b[0]));
    for (let [gladiator, s] of result) {
        console.log(`${gladiator}: ${s} skill`);
        let resultNext = [...gladiatorPool.get(gladiator).entries()]
            .sort((a, b) => b[1] - a[1])
            .sort((a, b) => a[0].localeCompare(b[0]));
        for (let [tech, skill] of resultNext) {
            console.log(`- ${tech} <!> ${skill}`);
        }

    }
    */

}

solve(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar']);