function solve(arr) {
    let set = new Set();
    for (let input of arr) {
        set.add(input);
    }
    let userNames = [...set.keys()].sort((a, b) => sortFunc(a, b));
    for (let users of userNames) {
        console.log(users);
    }
    function sortFunc(a, b) {
        if (a.length != b.length) {
            return a.length - b.length;
        }
        else {
            return a.localeCompare(b);
        }
    }

}


solve(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']);