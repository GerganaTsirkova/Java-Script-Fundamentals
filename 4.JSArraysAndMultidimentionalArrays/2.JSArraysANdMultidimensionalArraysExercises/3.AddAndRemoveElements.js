function solve(commands) {
    let arr = [];
    for (let i = 0; i < commands.length; i++) {
        if(commands[i]==='add'){
            let currentElement = i+1;
            arr.push(currentElement);
        }
        else if((commands[i]==='remove')&&(arr.length !== 0)){
            arr.splice( arr.length-1, 1 );
        }
    }
    if(arr.length==0){
        console.log('Empty');
    }
    else {
        console.log(arr.join('\n'));
    }
}
solve(['add','add','remove','add','add']);