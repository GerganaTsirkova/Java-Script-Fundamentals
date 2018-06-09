function solve(array) {
    let bitcoinSum = 0;
    let day = 0;
    let sum = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count++;
        sum += parseFloat(array[i]) * 67.51;
        if ((count >= 3) && (count % 3 === 0)) {
            sum -= 0.30 * (parseFloat(array[i]) * 67.51);
            if (sum >= 11949.16) {
                let middleSum = Math.floor(sum / 11949.16);
                bitcoinSum += middleSum;
                sum = sum - (middleSum * 11949.16);
            }

        }
        else if (sum >= 11949.16) {
            if (day === 0) {
                day = count;
            }
            let middleSum = Math.floor(sum / 11949.16);
            bitcoinSum += middleSum;
            sum = sum - (middleSum * 11949.16);
        }
    }
    console.log(`Bought bitcoins: ${bitcoinSum}`);
    if (day > 0) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}

solve(['100', '200', '300']);