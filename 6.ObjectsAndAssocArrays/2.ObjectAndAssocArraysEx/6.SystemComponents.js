function solve(arr) {
    let map = new Map();
    for (let input of arr) {
        let [systemName, componentName, subComponentName] = input.split(' | ');
        if (!map.has(systemName)) {
            map.set(systemName, new Map());
        }
        let innerMap = map.get(systemName);
        if (!innerMap.has(componentName)) {
            innerMap.set(componentName, []);
        }
        map.get(systemName).get(componentName).push(subComponentName);
    }
    let sortSystemMap = [...map.keys()].sort((a, b) => sortFunc(a, b));
    for (let system of sortSystemMap) {
        console.log(system);

        let sortComponentMap = [...map.get(system).keys()].sort((a, b) => componentsSort(system, a, b));
        for (let component of sortComponentMap) {
            console.log(`|||${component}`);
            map.get(system).get(component).forEach(e => console.log(`||||||${e}`))
        }
    }

    function sortFunc(a, b) {
        if (map.get(a).size != map.get(b).size) {
            return map.get(b).size - map.get(a).size;
        }
        else {
            //case-insensitive order:
            return
            a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }

    function componentsSort(system, a, b) {
        return map.get(system).get(b).length - map.get(system).get(a).length;
    }
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);