function solve(arr) {
    let validSentence = [];
    let invalidSentence = [];
    if(arr.length===0){
        return;
    }
    let delimeter = arr[1];
    let companies = arr[0].split(`${delimeter}`).map(e=>e.toLowerCase());
    for (let i = 2; i < arr.length; i++) {
        let str = arr[i].toLowerCase();
        let pattern = '';
        let countMatch = 0;
        for (let j = 0; j < companies.length; j++) {
            let pattern = `(.*)${companies[j]}(.*)`;
            let regex = new RegExp(pattern);
            let m = regex.exec(str);
            if(m){
                countMatch++;
                if(countMatch===companies.length){
                    validSentence.push(str);
                    break;
                }
            }
            else {
                invalidSentence.push(arr[i].toLowerCase());
                break;
            }
        }


    }

    if (validSentence.length > 0) {
        console.log('ValidSentences');
        let count = 0;
        for (let str of validSentence) {
            count++;
            console.log(`${count}. ${str}`);
        }
    }
    if((validSentence.length>0)&&(invalidSentence.length>0)){
        console.log('='.repeat(30));
    }
    if (invalidSentence.length > 0) {
        let count = 0;
        console.log('InvalidSentences');
        for (let str of invalidSentence) {
            count++;
            console.log(`${count}. ${str}`);
        }
    }
}

solve(['bulgariatour@, minkatrans@, koftipochivkaltd',
    '@,',
    'Mincho   e  KoftiPochivkaLTD Tip 123   ve MinkaTrans BulgariaTour',
    'We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour',
    'dqdo BuLGariaTOUR mraz  some text but is KoftiPochivkaLTD minkaTRANS']);