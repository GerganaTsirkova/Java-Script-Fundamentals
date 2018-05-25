function solve(arr) {
    let objFruits = {};
    let objBottles = {};
    for (let line of arr) {
        let [fruit,quantity ] = line.split(' => ');
        quantity = Number(quantity);
        if(!objFruits.hasOwnProperty(fruit)){
            let currentFruit = fruit;
            objFruits[fruit]=quantity;
        }else {
            objFruits[fruit] += quantity;
        }
        if(objFruits[fruit]>=1000){
            let numBottlesToAdd = Math.floor(objFruits[fruit]/1000);
            let restFruitsAfterBottling = objFruits[fruit]%1000;
            objFruits[fruit] = restFruitsAfterBottling;
            if(!objBottles.hasOwnProperty(fruit)){
                objBottles[fruit] = 0;
            }
            objBottles[fruit] += numBottlesToAdd;
        }
    }
    for (let fruit in objBottles) {
        console.log(`${fruit} => ${objBottles[fruit]}`)
    }
}
solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);