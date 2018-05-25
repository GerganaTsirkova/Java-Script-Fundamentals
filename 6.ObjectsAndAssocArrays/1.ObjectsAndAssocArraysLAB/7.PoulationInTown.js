function population(arr) {
    let mapTowns = new Map;
    for (let element of arr) {
        let input = element.split(/ <-> /g);
        let town = input[0];
        let population = Number(input[1]);
        if (!mapTowns.has(town)) {
            mapTowns.set(town,population);
        }
        else {
            mapTowns.set(town,mapTowns.get(town)+population);
        }
    }
    [...mapTowns].forEach(([key,value])=>console.log(`${key} : ${value}`));
}
population(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);