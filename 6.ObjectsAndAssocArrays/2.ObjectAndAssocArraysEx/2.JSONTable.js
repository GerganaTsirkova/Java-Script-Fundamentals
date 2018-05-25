function solve(arr) {
    let table = '<table>\n';

    for (let line of arr) {
        table += '\t<tr>\n';
        let obj = JSON.parse(line);
        for (let objElement in obj) {
            table += `\t\t<td>${obj[objElement]}</td>\n`;
        }
        table += '\t<tr>\n';
    }

    table += '</table>';
    console.log(table);
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);