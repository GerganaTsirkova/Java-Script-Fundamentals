function solve(arr) {
    let map = new Map();
    for (let line of arr) {
        let tokens = line.split(' > ');
        let country = tokens[0];
        let townStr = tokens[1];
        let cost = Number(tokens[2]);
        let town = townStr[0].toUpperCase();
        for (let i = 1; i < townStr.length; i++) {
            town += townStr[i];
        }
        if (!map.has(country)) {
            let inner = new Map();
            inner.set(town, cost);
            map.set(country, inner);
        }
        else {
            let inner = map.get(country);
            if (!inner.has(town)) {
                inner.set(town, cost);
            }
            else {
                if (cost < map.get(country).get(town)) {
                    let inner = map.get(country);
                    inner.set(town,cost);
                }
            }
        }
    }
    let result = [...map.entries()].sort((a,b)=>a[0].localeCompare(b[0]));
    for (let [country,countryInfo] of result) {
        let resultInner = [...countryInfo.entries()].sort((a,b)=>a[1]-b[1]);
        let string = '';
        for (let [town,cost] of resultInner) {
            string += `${town} -> ${cost} `;
        }
        console.log(`${country} -> ${string} `);
    }
}

solve(["Bulgaria > sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]
)