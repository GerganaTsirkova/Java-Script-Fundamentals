function solve(arr) {
    let specialKey = arr[0];
    let pattern = `(^|\\s)(${specialKey}[\\s]+)([!#$%A-Z]{8,})(\\.|,|$|\\s)`;
    let regex = new  RegExp(pattern,'gi');
    for (let i = 1; i < arr.length; i++) {
        let currentLine = arr[i];
        let m = regex.exec(currentLine);
        while (m) {
            let word = m[3];
            if(word.toUpperCase() !== word){
                m = regex.exec(currentLine);
                continue;
            }
            word = word.replace(/!/g, '1')
                .replace(/%/g, '2')
                .replace(/\#/g, '3')
                .replace(/\$/g, '4')
                .replace(/[A-Z]+/g,x=>x.toLowerCase());
            let line = m[1]+m[2]+word+m[4];
            currentLine = currentLine.replace(m[0],line);
            m = regex.exec(currentLine);
        }
        console.log(currentLine);
    }
}
solve(['specialKey',
'In this text the specialKey HELLOWORLD! is correct, but',
'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!']);