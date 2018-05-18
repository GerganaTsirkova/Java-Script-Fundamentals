function count(str,strToSearch) {
    let counter = 0;
    while (true) {
        let startIndex = strToSearch.indexOf(str);
        if(startIndex<0){
            break;
        }
        counter++;
        strToSearch = strToSearch.substr(startIndex+1);
    }
    console.log(counter);
}
count('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')