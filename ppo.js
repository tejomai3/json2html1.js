// json2html.js

export default function json2html(data) {
    // Start building the HTML table with headers
    let html = <table data-user="gtejomai@gmail.com"><thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead><tbody>;

    // Loop through each object in the data array and create table rows
    data.forEach(row => {
        html += <tr><td>${row.Name || ''}</td><td>${row.Age || ''}</td><td>${row.Gender || ''}</td></tr>;
    });

    // Close the table
    html += '</tbody></table>';

    return html;
}