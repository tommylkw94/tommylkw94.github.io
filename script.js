function calculate() {
    let lev = parseInt(document.getElementById("input-lev").value);
    let entry = parseInt(document.getElementById("input-entry").value);
    let side = document.getElementById("long").checked ? 1 : -1;

    let profit = entry + 0.2 * side * entry / lev;
    let loss = entry - 0.1 * side * entry / lev;

    document.getElementById("stop-profit").innerHTML = profit;
    document.getElementById("stop-loss").innerHTML = loss;

}