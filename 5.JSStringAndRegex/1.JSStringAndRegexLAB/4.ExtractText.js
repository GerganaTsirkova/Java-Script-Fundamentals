function extract(text) {
    let arr =[];
    while (true) {
        let startIndex = text.indexOf('(');
        if(startIndex<0){
            break;
        }
        let endIndex = text.indexOf(')');
        if(endIndex<0||endIndex<startIndex){
            break;
        }
        arr.push(text.substring(startIndex+1,endIndex));
        text=text.substr(endIndex+1);
    }
    console.log(arr.join(', '));
}
extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');