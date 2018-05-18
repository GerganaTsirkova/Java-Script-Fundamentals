function extract(arr) {
    let pattern=/((www\.)([a-zA-Z0-9-]+)(\.[a-z]+)+)/g;
    let regex = new RegExp(pattern,'g');
    for (let arrElement of arr) {
        let m = regex.exec(arrElement);
        while (m){
            console.log(m[1].toString());
            m = regex.exec(arrElement);
        }
    }
}
extract(['Need information about cheap hotels in London?' +
'You can check us at www.london-hotels.co.uk!' +
'You can check us at www.-.co.uk!'+
'We provide the best services in London.' +
'Here are some reviews in some blogs:' +
'"London Hotels are awesome!" - www.indigo.bloggers.com' +
'"I am very satisfied with their services" - ww.ivan.bg' +
'"Best Hotel Services!" - www.rebel21.sedecrem.moc ']);