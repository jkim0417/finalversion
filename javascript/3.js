//Jihee Kim
//jiheek1@andrew.cmu.edu


//make a function that adds more rows at the bottom of the table that exsits on the
//webpage
function addRow() {
    var table = document.getElementById("mealplantable");
    var row = table.insertRow(-1); //bottom
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    // cell1.innerHTML = "breakfast";
    cell1 = document.createElement("input");
    cell1.type = "text";
    cell2.innerHTML = "lunch";
    cell3.innerHTML = "dinner";
}
