function filterByAge(minAge, firstName,firstAge,secName,secAge){
    let first = {name: firstName,age: firstAge};
    let second = {name: secName,age: secAge};
    if(first.age>=minAge){
        console.log(`{ name: '${first.name}', age: ${first.age} }`);
    }
    if(second.age>=minAge){
        console.log(`{ name: '${second.name}', age: ${second.age} }`);
    }
}
filterByAge(12, "Ivan", 15, "Petar", 20);