function solve(input) {
    let arr = input[0].split(' ');
    let command = '';
    let equipment = '';
    for (let i = 1; i < input.length; i++) {
        command = input[i];
        if (command === 'Fight!') {
            break;
        }
        let tokens = command.split(' ');
        if (tokens[0] === 'Buy') {
            equipment = tokens[1];
            if (!arr.includes(equipment)) {
                arr.push(equipment);
            }
        }
        if (tokens[0] === 'Trash') {
            equipment = tokens[1];
            if (arr.includes(equipment)) {
                arr.splice(arr.indexOf(equipment), 1);
            }
        }
        if (tokens[0] === 'Repair') {
            equipment = tokens[1];
            if (arr.includes(equipment)) {
                arr.splice(arr.indexOf(equipment), 1);
                arr.push(equipment);
            }
        }
        if (tokens[0] === 'Upgrade') {
            let equipmentRaw = tokens[1].split('-');
            equipment = equipmentRaw[0];
            let upgrade = equipmentRaw[1];
            if (arr.includes(equipment)) {
                let index = arr.indexOf(equipment) + 1;
                let up = `${equipment}:${upgrade}`;
                arr.splice(index, 0, up);
            }
        }
    }
    console.log(arr.join(' '));
}

solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!']);