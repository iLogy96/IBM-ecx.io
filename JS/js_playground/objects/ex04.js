let counter = 3;
function insert_Row() {
    let row = document.createElement('tr');
    let rowData1 = document.createElement('td');
    let rowData2 = document.createElement('td');
    let rowDataContent1 = document.createTextNode(`Row${counter} cell1`);
    let rowDataContent2 = document.createTextNode(`Row${counter} cell2`);
    rowData1.appendChild(rowDataContent1);
    rowData2.appendChild(rowDataContent2);
    row.appendChild(rowData1);
    row.appendChild(rowData2);
    counter++
    let table = document.querySelector('#sampleTable');
    table.appendChild(row);
}
