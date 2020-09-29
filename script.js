function calculate() {
    let lev = parseInt(document.getElementById("input-lev").value);
    let loss = parseInt(document.getElementById("input-loss").value);
    let ratio = parseFloat(document.getElementById("input-ratio").value);
    let entry = parseInt(document.getElementById("input-entry").value);
    let side = document.getElementById("long").checked ? 1 : -1;

    let stopProfit = entry + (loss/100) * ratio * side * entry / lev;
    let stopLoss = entry - (loss/100) * side * entry / lev;

    document.getElementById("stop-profit").innerHTML = stopProfit;
    document.getElementById("stop-loss").innerHTML = stopLoss;
}