let companies = [
    { id: 1, name: "Amazon", sales: 3000 },
    { id: 2, name: "BestBuy", sales: 2000 },
    { id: 3, name: "Meijer", sales: 4000 },
    { id: 4, name: "Kroger", sales: 7000 },
    { id: 5, name: "Walmart", sales: 9000 },
    { id: 6, name: "PG", sales: 8000 }
];


const display = () => {
    //get programmatic access to the <tbody> tag
    let tbody = document.getElementById("tbody");
    //clear the contents of the <tbody> tag  if any
    tbody.innerHTML = "";
    //loop through the array of objects
    for (let c of companies) {
        //use a variable to construct the row to be inserted into the <tbody> tag
        let tr = "<tr>";
        tr += `<td>${c.id}</td>`;
        tr += `<td>${c.name}</td>`;
        tr += `<td>${c.sales}</td>`;
        tr += "</tr>";
        //append the constructed row to the innerHTML of the <tbody> variable
        tbody.innerHTML += tr;
    }
}
