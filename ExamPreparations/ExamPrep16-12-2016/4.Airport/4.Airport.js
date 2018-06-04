function solve(arr) {
    let planesLandOrDepart = new Set();
    //town => [arrivals,departures]
    let townsData = new Map();
    //town => set of planes
    let townPlanes = new Map();
    for (let line of arr) {
        let input = line.split(/\s+/);
        let plane = input[0];
        let patternPlane = /[A-Za-z0-9]+/;
        let match = plane.match(patternPlane);
        if(!match){
            continue;
        }
        let town = input[1];
        let numberPassengers = Number(input[2]);
        let position = input[3];
        if (position === 'land') {
            if (planesLandOrDepart.has(plane)) {
                continue;
            }
            else {
                planesLandOrDepart.add(plane);
            }
        }
        else if (position === 'depart') {
            if (planesLandOrDepart.has(plane)) {
                planesLandOrDepart.delete(plane);
            }
            else {
                continue;
            }
        }
        //now we have to fill the townsData:
        if(!townsData.has(town)){
            let arr = [];
            if(position==="land"){
                arr.push(numberPassengers);
                arr.push(0);
            }
            else {
                arr.push(0);
                arr.push(numberPassengers);
            }
            townsData.set(town,arr);
        }
        else {
            let arr = townsData.get(town);
            if(position==="land"){
                arr[0] += numberPassengers;
            }
            else {
                arr[1] += numberPassengers;
            }
            townsData.set(town,arr);
        }
        if(!townPlanes.has(town)){
            let set = new Set();
            set.add(plane);
            townPlanes.set(town,set);
        }
        else {
            let set = townPlanes.get(town);
            set.add(plane);
            townPlanes.set(town,set);
        }

    }
    console.log("Planes left:");
    let planes = [...planesLandOrDepart].sort((a, b) => a.localeCompare(b));
    for (let plane of planes) {
        console.log(`- ${plane}`)
    }
    let result = [...townsData.entries()].sort((a,b)=>{
        if(a[1][0]<b[1][0]) return 1;
        else if(a[1][0]>b[1][0]) return -1;
        else return a[0].localeCompare(b[0]);
    });
    for (let [city,passengers] of result) {
        console.log(city);
        console.log(`Arrivals: ${passengers[0]}`);
        console.log(`Departures: ${passengers[1]}`);
        console.log("Planes:");
        let sortedPlanes = [...townPlanes.get(city).values()].sort((a,b)=> a.localeCompare(b));
        for (let airplane of sortedPlanes.sort((a,b)=>a.localeCompare(b))) {
            console.log(`-- ${airplane}`);
        }
    }
}

solve([ "Boeing474 Madrid 300 land", "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart", "ATR72 WashingtonDC 272 land", "ATR72 Madrid 135 depart"
])