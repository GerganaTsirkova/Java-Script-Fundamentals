function solve(arr) {
    let charStart = Number(arr[0]);
    let charEnd = Number(arr[1]);
    let rightWord = arr[2];
    let text = arr[3];
    let country = '';
    let town = '';

    let patternCountry = /[A-Z][a-z]+[A-Z]/;
    let regCountry = new RegExp(patternCountry);
    let matchCountry = regCountry.exec(text);
    if(matchCountry){
        let tempStringCountry = matchCountry.toString();
        let stringToReplace = '';
        for (let i = charStart; i <= charEnd; i++) {
            stringToReplace += tempStringCountry[i];
        }
        country = tempStringCountry.replace(stringToReplace,rightWord);
    }

    let patternTown = /([0-9]{3})((\.)*[0-9])*/g;
    let regexTown = new RegExp(patternTown);
    let matchTown = regexTown.exec(text);
    while (matchTown) {
        let resultedString = matchTown[1].toString();
        let num =0;
        let index = text.indexOf(resultedString+3);
        if(matchTown[2] !== undefined){
            num += Number(resultedString)+1;
        }
        else {
            num = Number(resultedString);
        }
        let char = String.fromCharCode(num);
        town += char;

        matchTown = regexTown.exec(text);
    }
    let resultedTown = town[0].toUpperCase();
    for (let i = 1; i < town.length; i++) {
        resultedTown += town[i].toLowerCase();
    }
    let resultedCountry = country[0].toUpperCase();
    for (let i = 1; i < country.length; i++) {
        resultedCountry += country[i].toLowerCase();
    }
    console.log(`${resultedCountry} => ${resultedTown}`)
}
solve(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
solve(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);