function submitClickCanvas(event) {
    const rect = document.getElementById("axes").getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    transformPixels(x, y);
}

function transformPixels(x, y) {    //TODO This method can contain reason of false locating of point by Y coordinate
    const c = 520*2/3;

    x = (x-25)/c*2*rInput.value-2;
    y = ((y-25)/c*2*rInput.value-2);

    clickCanvas(x, y);
}

function clickCanvas(x, y) {
    formRequest(alpha.options[alpha.selectedIndex].value, beta.options[beta.selectedIndex].value, gamma.options[gamma.selectedIndex].value, delta.options[delta.selectedIndex].value, x, xL.value, xR.value, y, yL.value, yR.value, rInput.value, rL.value, rR.value);
}

function submitClickButton(){
    formRequest(alpha.options[alpha.selectedIndex].value, beta.options[beta.selectedIndex].value, gamma.options[gamma.selectedIndex].value, delta.options[delta.selectedIndex].value, xInput.value, xL.value, xR.value, yInput.value, yL.value, yR.value, rInput.value, rL.value, rR.value);
}

function formRequest(q1, q2, q3, q4, x, xL, xR, y, yL, yR, r, rL, rR) {

    let req = new XMLHttpRequest();
    req.open("POST", document.documentURI, true);
    req.onload = ()=>changePage(JSON.parse(req.responseText));
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(`t=${1}&q1=${q1}&q2=${q2}&q3=${q3}&q4=${q4}&xL=${xL}&yL=${yL}&rL=${rL}&xR=${xR}&yR=${yR}&rR=${rR}&x=${x}&y=${-y}&r=${r}`);
}

function changePage(point) {

        if (!document.getElementById("result-table")) {
            let table = document.createElement("table");
            table.id = "result-table";
            let headers = document.createElement("tr");
            headers.id = "table-headers";
            headers.innerHTML = "<th>X</th><th>Y</th><th>R</th><th>Попадание?</th>";
            document.getElementsByClassName("table-place")[0].append(table);
            table.append(headers);
        }

        let row = document.createElement("tr");
        row.innerHTML = `<td>${point.x}</td><td>${point.y}</td><td>${point.r}</td><td>${point.isHit}</td></td>`; //Everything is OK there
        document.getElementById("table-headers").after(row);
        drawPoint(point.x, point.y, point.isHit); //Everything is OK there
}