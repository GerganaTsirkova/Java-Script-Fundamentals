function bill(arr) {
    let sum = 0;
    let stuff = [];
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0){
            sum += Number(arr[i]);
        }
        else {
            stuff.push(arr[i]);
        }
    }
    console.log(`You purchased ${stuff.join(', ')} for a total sum of ${sum}`);
}
bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])