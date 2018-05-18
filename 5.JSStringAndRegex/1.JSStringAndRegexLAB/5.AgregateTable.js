function aggregate(arr) {
    let population = 0;
    let cities = [];
    for (let i = 0; i < arr.length; i++) {
        let tempString = arr[i].split('|');
        let town = tempString[1];
        let num = tempString[2];

        cities.push(town.trim());
        population += Number(num.trim());
    }
    console.log(cities.join(', '));
    console.log(population);
}
aggregate(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'])