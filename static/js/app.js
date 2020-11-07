// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", filterData);
form.on("submit", filterData);

function filterData() {
    d3.event.preventDefault();
    const thingtofilter = d3.select("#datetime").property("value");
    var results = tableData.filter((data) => data['datetime'] == thingtofilter);
    
    renderTable(results);
}

function renderTable(table) {
    var tbody = d3.select("tbody");
    tbody.html("");
    table.forEach((currentRow) => {
        var row = tbody.append("tr");
        for (let key in currentRow) {
            var cell = row.append("td");
            cell.text(currentRow[key]);
        }
    });
}

renderTable(data);