function solve(arr) {
    let citiesData = new Map();
    for (let element of arr) {
        let input = element.split(/ -> /);
        let city = input[0];
        let products = input[1];
        let money = input[2].split(/ : /).map(e=>Number(e)).reduce((a,b)=> a*b);
        if(!citiesData.has(city)){
            citiesData.set(city,new Map());
        }
        if(!citiesData.get(city).has(products)){
            citiesData.get(city).set(products,0);
        }
        let oldSum = citiesData.get(city).get(products);
        citiesData.get(city).set(products,oldSum+money);

    }
    for (let [towns,data] of citiesData) {
        console.log(`Town - ${towns}`);
        for (let [products,income] of data) {
            console.log(`$$$${products} : ${income}`);
        }
    }
}
solve(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Oranges -> 200000 : 1',
'Montana -> Strawberries -> 20000 : 0.2',
'Montana -> Cherries -> 1000 : 0.3']);