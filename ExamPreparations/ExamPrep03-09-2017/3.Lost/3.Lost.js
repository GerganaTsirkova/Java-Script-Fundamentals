function solve(word, text) {
    let key = word;
    let latitude = '';
    let longitude = '';
    let message = '';
    let patternEast = /(east)[\s\S]*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gmi;
    let regexEast = new RegExp(patternEast);
    let mEast = regexEast.exec(text);
    while (mEast) {
        longitude = mEast[2] + '.' + mEast[3];
        mEast = regexEast.exec(text);
    }
    let patternNorth = /(north)[\s\S]*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gmi;
    let regexNorth = new RegExp(patternNorth);
    let mNorth = regexNorth.exec(text);
    while (mNorth) {
        latitude = mNorth[2] + '.' + mNorth[3];
        mNorth = regexNorth.exec(text);
    }
    let messagePattern = new RegExp(`${key}([\\s\\S]*)${key}`, 'gim');
    let m = messagePattern.exec(text);
    while (m){
        message = m[1];
        m = messagePattern.exec(text);
    }
    console.log(`${latitude} N`);
    console.log(`${longitude} E`);
    console.log(`Message: ${message}`);
}

solve('4ds',
    'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532');