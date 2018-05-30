function solve(arr) {
    let map = new Map();
    let personSubscribedTo = new Map();
    for (let line of arr) {
        let token = line.split('-');
        let person = '';
        let subscribers = '';
        if (token.length === 1) {
            person = token[0];
            if (!map.has(person)) {
                map.set(person, []);
            }
        }
        else {
            person = token[1];
            subscribers = token[0];
            if ((!map.has(person)) || (!map.has(subscribers))) {
                continue;
            }
            let arr = map.get(person);
            arr.push(subscribers);
            map.set(person, arr);
            //second map filling
            if(!personSubscribedTo.has(subscribers)){
                let inner = [];
                inner.push(person);
                personSubscribedTo.set(subscribers,inner);
            }
            else {
                let innerArr = personSubscribedTo.get(subscribers);
                innerArr.push(person);
                personSubscribedTo.set(subscribers,innerArr);
            }
        }
    }
    let result = [...map.entries()].sort(sorted);
    for (let importantPerson of result) {
        console.log(importantPerson[0]);
        let count = 0;
        for (let persons of importantPerson[1]) {
            count++;
            console.log(`${count}. ${persons}`)
        }
        break;
    }

    function sorted(a, b) {
        let res = b[1].length-a[1].length;
        if (res!==0) {
            return res;
        }
        else {
            return personSubscribedTo.get(b[0].length)-personSubscribedTo.get(a[0].length);
        }
    }
}

solve(['P',
'P-R',
'R',
'P-R',
'P-E',
'E',
'P-E',
'P-L',
'L',
'P-L',
'P-A',
'A',
'P-A',
'P-S',
'S',
'P-S',
'P-T',
'T',
'P-T',
'T-P']);
