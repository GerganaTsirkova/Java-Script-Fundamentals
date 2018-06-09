function solve(houseRooms, gusets) {
    //roomNumber,[name,age,gender])
    let hotelGuestRegister = new Map();
    //roomNumber[beds,availableBeds];
    let hotelRooms = new Map();
    let guestsTotal =[];
    let arrMovedGuest = [];
    for (let line of houseRooms) {
        let obj = line;
        let roomNumber = obj['number'];
        let roomType = obj['type'];
        let bed = 0;
        if(!hotelRooms.has(roomNumber)){
            let inner = [];
            if(roomType =='double-bedded'){
                bed = 2;
                inner.push(2);
                inner.push(2);
                inner.push('G');
            }
            else {
                bed = 3;
                inner.push(3);
                inner.push(3);
                inner.push('G');
            }
            hotelRooms.set(roomNumber,inner);
        }
    }
    //setting the guests
    for (let guest of gusets) {
        let object = guest;
        let firstGuest = object['first'];
        let nameF = firstGuest['name'];
        let genderF = firstGuest['gender'];
        let ageF = firstGuest['age'];

        let secondGuest = object['second'];
        let nameS = secondGuest['name'];
        let genderS = secondGuest['gender'];
        let ageS = secondGuest['age'];

        if(genderF!==genderS){
            let checkRooms = [...hotelRooms.entries()];
            for (let room of checkRooms) {
                if(room[1][1]===2){
                    hotelRooms.set(room[0],object);
                    break;
                }
            }
        }
        else {
            let checkRooms = [...hotelRooms.entries()];
            let boolFirst = false;
            let boolSecond =false;
            for (let room of checkRooms) {
                if(room[1][1]===3){
                    if(room[1][1]>=2){
                        let innerArr = hotelRooms.get(room[0]);
                        let freeBeds = innerArr[1];
                        innerArr[1]= freeBeds-2;
                        innerArr[2]= genderS;
                        hotelRooms.set(room[0],innerArr);
                        let arrGuests = [];
                        arr.push()
                        hotelGuestRegister.set(room[0],object);
                        boolFirst=true;
                        boolSecond=true;
                        break;
                    }
                    else  if(room[1][1]===1){
                        let innerArr = hotelRooms.get(room[0]);
                        if(innerArr[2]===genderF){
                            innerArr[1]=0;
                            innerArr[0]=3;
                            if(boolFirst===false){
                                hotelGuestRegister.set(room[0],firstGuest);
                                boolFirst = true;
                            }
                            else if(boolSecond===false){
                                hotelGuestRegister.set(room[0],secondGuest);
                                boolSecond = true;
                            }
                        }
                    }
                }
            }
            if(boolFirst===false){
                arrMovedGuest.push(nameF);
            }
            if(boolSecond===false){
                arrMovedGuest.push(nameS);
            }
        }
    }
    let result = [...hotelGuestRegister.entries()].sort((a,b)=>a[0].localeCompare(b[0]));
    for (let [room,details] of result) {
        console.log(`Room number: ${room}`);
        let resultInfo = [...details];
        let resultGuestInfo = [...details[1]];
        console.log(resultGuestInfo);
        for (const guset of gusets) {

        }
        console.log(`--Guest Name: ${details[1][0]}`);
        console.log(`--Guest Age: ${details[1][2]}`);
        console.log(`Empty beds in the room: ${hotelRooms.get(room)[1]}`);
    }
    console.log(`Guests moved to the tea house: ${arrMovedGuest.length}`);
}

solve([{number: '101A', type: 'double-bedded'},
        {number: '104', type: 'triple'},
        {number: '101B', type: 'double-bedded'},
        {number: '102', type: 'triple'}],
    [{
        first: {name: 'Sushi & Chicken', gender: 'female', age: 15},
        second: {name: 'Salisa Debelisa', gender: 'female', age: 25}
    },
        {
            first: {name: 'Daenerys Targaryen', gender: 'female', age: 20},
            second: {name: 'Jeko Snejev', gender: 'male', age: 18}
        },
        {
            first: {name: 'Pesho Goshov', gender: 'male', age: 20},
            second: {name: 'Gosho Peshov', gender: 'male', age: 18}
        },
        {
            first: {name: 'Conor McGregor', gender: 'male', age: 29},
            second: {name: 'Floyd Mayweather', gender: 'male', age: 40}
        }]);