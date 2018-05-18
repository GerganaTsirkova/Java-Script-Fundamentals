function cooking(arr) {
    var start = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop':
                console.log(chop(start));
                start = chop(start);
                break;
            case 'dice':
                console.log(dice(start));
                start = dice(start);
                break;
            case 'spice':
                console.log(add(start));
                start = add(start);
                break;
            case 'bake':
                console.log(multiply(start));
                start = multiply(start);
                break;
            case 'fillet':
                console.log(fillet(start));
                start = fillet(start);
                break;
        }
    }

    function chop(start) {
        start /= 2;
        return start;
    }

    function dice(start) {
        start = Math.sqrt(start);
        return start;
    }

    function add(start) {
        start++;
        return start;
    }

    function multiply(start) {
        start *= 3;
        return start;
    }

    function fillet(start) {
        start -= 0.20 * start;
        return start;
    }
}
cooking([32, 'chop', 'chop', 'chop', 'chop', 'chop']);