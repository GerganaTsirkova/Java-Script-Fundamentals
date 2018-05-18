function dates(input) {
    let result =[];
    let text = input.join(' ');
    let pattern = /\b(([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4}))\b/g;
    let regex = new RegExp(pattern, 'g');
    let match = regex.exec(text);
    while (match) {
        let date = match[1];
        let day = match[2];
        let month = match[3];
        let year = match[4];
        result.push(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);
        match = regex.exec(text);
    }
    console.log(result.join('\n'));
}
dates(['I dont know what to test anymore so here are some random dates.',
'15-May-1996',
'21-June-1995',
'31-February-3000',
'woops that was invalid...',
'111-Nov-2332',
'01-January-0001']);