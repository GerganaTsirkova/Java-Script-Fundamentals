function solve(text) {
    let surveyLabel = '';
    let patternSurvey = /<svg>(.*?)\/svg>/gm;
    let regexSurvey = new RegExp(patternSurvey);
    let matchSurvey = regexSurvey.exec(text);
    let sum = 0;
    let sumVotes = 0;
    if (!matchSurvey) {
        return console.log('No survey found');
    }
    else {
        while (matchSurvey) {
            let string = matchSurvey[1];
            let patternCats = /<cat>(.*)<\/cat>(\s+)*<cat>(.*)<\/cat>/;
            let regexCats = new RegExp(patternCats);
            let matchCats = regexCats.exec(string);
            if (!matchCats) {
                return console.log('Invalid format');
            }
            else {
                let firstCat = matchCats[1].toString();
                let patternFirstCat = /<text>.*\[(.*)\]<\/text>/gm;
                let regexFirstCat = new RegExp(patternFirstCat);
                let matchCatFirst = regexFirstCat.exec(firstCat);
                if (!matchCatFirst) {
                    return console.log('Invalid format');
                }
                else {
                    surveyLabel += matchCatFirst[1].toString() + ': ';
                    let secondCat = matchCats[3].toString();
                    let patternSecondCat = /<g><val>(1|2|3|4|5|6|7|8|9|10)<\/val>([0-9]+)<\/g>/g;
                    let regexSecondCat = new RegExp(patternSecondCat);
                    let matchSecondCat = regexSecondCat.exec(secondCat);
                    if (!matchSecondCat) {
                        return console.log('Invalid format');
                    }
                    else {
                        while (matchSecondCat) {
                            let vote = matchSecondCat[2].toString();
                            sumVotes += Number(vote);
                            let value = matchSecondCat[1].toString();
                            sum += Number(vote) * Number(value);
                            matchSecondCat = regexSecondCat.exec(secondCat);
                        }
                        surveyLabel += parseFloat((sum / sumVotes).toFixed(2).toString());
                    }
                }
            }
            matchSurvey = regexSurvey.exec(text);
        }
    }
    console.log(surveyLabel);
}

solve('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');

solve('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>')