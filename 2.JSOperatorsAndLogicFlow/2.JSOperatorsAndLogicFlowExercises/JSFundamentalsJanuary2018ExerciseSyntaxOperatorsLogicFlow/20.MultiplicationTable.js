function table(num) {
    console.log("<table border=\"1\">");
    let html = "<tr><th>x</th>";
    for (let i = 1; i <= num; i++) {
        if(i===num){
            html += `<th>${i}</th></tr>`;
        }
        else {
            html += `<th>${i}</th>`;
        }
    }
    console.log(html);
    let h ="";
    for (let i = 1; i <= num; i++) {
        let a = 2*i;
        h =`<tr><th>${i}</th><td>${i}</td>`;
        for (let j = 1; j < num; j++) {
            if(j===num-1)
            {
                h += `<td>${a}</td></tr>`;
            }
            else {
                h += `<td>${a}</td>`;
                a+=i;
            }
        }
        console.log(h)
        h = "";
    }
    console.log("</table>");
}