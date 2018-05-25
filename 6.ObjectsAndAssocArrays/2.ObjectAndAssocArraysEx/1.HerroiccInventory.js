function solve(arr) {
    let heroData = [];
    for (let line of arr) {
        line = line.split(' / ');
        let heroName = line[0];
        let heroLevel = line[1];
        let heroItems = [];
        if(line.length>2){
            heroItems = line[2].split(', ');
        }
        let hero = {
            "name": heroName,
            "level": Number(heroLevel),
            "items": heroItems
        };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);