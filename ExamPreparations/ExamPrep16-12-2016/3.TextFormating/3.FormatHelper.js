function solve(text) {
    text=text.toString();
    console.log(text.replace(/[ ]*([.,!?:;])[ ]*/g, (match, groupOne) => `${groupOne} `)
        .replace(/\.\s(?=[0-9])/g, (match) => '.')
        .replace(/" *(.+?) *"/g, (match, groupOne) => `"${groupOne}"`)
        .replace(/([.,:;!?]) (?=[.,:;!?]+)/g, (match, groupOne) => groupOne));
}

solve('Now, let\'s test some! $#@!1! strange symbols followed, be some more: (@!#$#@$DF%$);NewLines cannot be used, tear! ');