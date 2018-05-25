function solve(json) {
    let html = '<table>\n';
    let arr = JSON.parse(json);
    html += '   <tr>';
    for (let element of Object.keys(arr[0])) {
        html += `<th>${element}</th>`;
    }
    html += '</tr>\n';
    for (let obj of arr) {
        html += '   <tr>';
        for (let value of Object.keys(obj)) {
            html += `<td>${escapeHtml(obj[value])}</td>`;
        }
        html += '</tr>\n';
    }

    html += '</table>';
    console.log(html);
    function escapeHtml(text) {
        return text.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

}
solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')
