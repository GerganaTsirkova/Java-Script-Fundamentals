function properties(arr) {
    let object = {};
    object[arr[0]]=arr[1];
    object[arr[2]]=arr[3];
    object[arr[4]]=arr[5];
    console.log(object)
}
properties(['name', 'Ana', 'age', '23', 'gender', 'male']);