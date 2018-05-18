function result(fruit) {
    let result = '';
    switch (fruit) {
        case 'banana': result = 'fruit';
        break;
        case 'apple': result = 'fruit';
            break;
        case 'kiwi': result = 'fruit';
            break;
        case 'cherry': result = 'fruit';
            break;
        case 'lemon': result = 'fruit';
            break;
        case 'grapes': result = 'fruit';
            break;
        case 'peach': result = 'fruit';
            break;
        case 'tomato': result = 'vegetable';
            break;
        case 'cucumber': result = 'vegetable';
            break;
        case 'pepper': result = 'vegetable';
            break;
        case 'onion': result = 'vegetable';
            break;
        case 'garlic': result = 'vegetable';
            break;
        case 'parsley': result = 'vegetable';
            break;
        default: result = 'unknown'

    }
    console.log(result);
}