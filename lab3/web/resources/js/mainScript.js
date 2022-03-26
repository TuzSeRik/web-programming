window.onload = start;
window.xInput = document.getElementById("x-visible");
window.yInput = document.getElementById("y-visible");
window.rInput = document.getElementById("r-visible");
window.axes = document.getElementById("axes");

function start() {
    axes.addEventListener("click", submitClickCanvas);

    const context = axes.getContext("2d");
    const r = document.getElementById("r-visible").value;
    const c = 2/3;
    context.clearRect(0, 0, axes.width, axes.height);

    //circle
    context.translate(200, 200);
    context.beginPath();
    context.arc(0, 0, 130*c, 3*Math.PI/2, 2*Math.PI, false);
    context.closePath();
    context.strokeStyle = "#2f9aff";
    context.fillStyle = "#2f9aff";
    context.fill();
    context.stroke();

    //triangle
    context.translate(200, 200);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(-260*c, 0);
    context.lineTo(0, 260*c);
    context.lineTo(0, 0);
    context.closePath();
    context.strokeStyle = "#2f9aff";
    context.fillStyle = "#2f9aff";
    context.fill();
    context.stroke();

    //rectangle
    context.translate(200, 200);
    context.beginPath();
    context.rect(0, 0, 260*c, 130*c);
    context.closePath();
    context.strokeStyle = "#2f9aff";
    context.fillStyle = "#2f9aff";
    context.fill();
    context.stroke();


    // axes
    context.beginPath();
    context.font = "20px Verdana";
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.moveTo(300*c, 0);
    context.lineTo(300*c, 600*c);
    context.moveTo(300*c, 0);
    context.lineTo(290*c, 30*c);
    context.moveTo(300*c, 0);
    context.lineTo(310*c, 30*c);
    context.fillText("Y", 320*c, 20*c);
    context.moveTo(0, 300*c);
    context.lineTo(600*c, 300*c);
    context.moveTo(600*c, 300*c);
    context.lineTo(570*c, 290*c);
    context.moveTo(600*c, 300*c);
    context.lineTo(570*c, 310*c);
    context.fillText("X", 580*c, 260*c);

    // Y parts
    context.moveTo(290*c, 40*c);
    context.lineTo(310*c, 40*c);
    context.moveTo(290*c, 170*c);
    context.lineTo(310*c, 170*c);
    context.moveTo(290*c, 430*c);
    context.lineTo(310*c, 430*c);
    context.moveTo(290*c, 560*c);
    context.lineTo(310*c, 560*c);

    // X parts
    context.moveTo(40*c, 290*c);
    context.lineTo(40*c, 310*c);
    context.moveTo(170*c, 290*c);
    context.lineTo(170*c, 310*c);
    context.moveTo(430*c, 290*c);
    context.lineTo(430*c, 310*c);
    context.moveTo(560*c, 290*c);
    context.lineTo(560*c, 310*c);

    context.closePath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.stroke();


    context.beginPath();
    context.font = "20px Verdana";
    context.strokeStyle = "black";
    context.fillStyle = "black";

    //Y
    context.fillText(String(r), 320*c, 40*c);
    context.fillText(String(r / 2), 320*c, 156*c);
    context.fillText(String(-(r / 2)), 320*c, 430*c);
    context.fillText(String(-r), 320*c, 560*c);

    //X
    context.fillText(String(-r), 30*c, 280*c);
    context.fillText(String(-(r / 2)), 140*c, 280*c);
    context.fillText(String(r / 2), 430*c, 280*c);
    context.fillText(String(r), 560*c, 280*c);

    context.closePath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.stroke();

}

function submitClickCanvas(event) {
    const rect = document.getElementById("axes").getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    transformPixels(x, y);
}

function transformPixels(x, y) {
    c = 520*2/3;

    x = (x-25)/c*2*rInput.value-rInput.value;
    y = -((y-25)/c*2*rInput.value-rInput.value);

    clickCanvas(x, y);
}

function clickCanvas(x, y) {
    addPoint();
}

function drawPoint() {

}

function drawStep() {

}

beginTime();
function beginTime() {
    let container = document.getElementById("time-container");
    changeTime(container);
    setInterval(()=>changeTime(container), 1000)
}
function changeTime(container) {
    let date = new Date();
    let hours = date.getHours();
    hours = hours<10 ? "0"+hours : hours;
    let minutes = date.getMinutes();
    minutes = minutes<10 ? "0"+minutes : minutes;
    let seconds = date.getSeconds();
    seconds = seconds<10 ? "0"+seconds : seconds;
    container.innerHTML = `<p>Текущее время: ${hours}:${minutes}:${seconds}</p>`
}

/*

function drawAxis() {
    let h = canvas.height;
    let w = canvas.width;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w/2, h);
    ctx.lineTo(w/2, 0);
    ctx.lineTo(w/2+3, 7);
    ctx.moveTo(w/2, 0);
    ctx.lineTo(w/2-3, 7);
    drawDigitsX(ctx, size, w, h);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, h/2);
    ctx.lineTo(w, h/2);
    ctx.lineTo(w-7, h/2+3);
    ctx.moveTo(w, h/2);
    ctx.lineTo(w-7, h/2-3);
    drawDigitsY(ctx, size, w, h);
    ctx.stroke();
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 1;
    ctx.moveTo(w/2-5*size, h/2-5*size);
    ctx.lineTo(w/2+3*size, h/2-5*size);
    ctx.lineTo(w/2+3*size, h/2+5*size);
    ctx.lineTo(w/2-5*size, h/2+5*size);
    ctx.lineTo(w/2-5*size, h/2-5*size);
    ctx.stroke();
}
function drawDigitsX(ctx, i, w, h) {
    let t=w/2;
    for (let j=0; j<5; j++){
        t+=i;
        ctx.moveTo(t, h/2+3);
        ctx.lineTo(t, h/2-3)
    }
    t=w/2;
    for (let j=0; j<5; j++){
        t-=i;
        ctx.moveTo(t, h/2+3);
        ctx.lineTo(t, h/2-3)
    }
}
function drawDigitsY(ctx, i, w, h) {
    let t=h/2;
    for (let j=0; j<5; j++){
        t+=i;
        ctx.moveTo(w/2+3, t);
        ctx.lineTo(w/2-3, t);
    }
    t=h/2;
    for (let j=0; j<5; j++){
        t-=i;
        ctx.moveTo(w/2+3, t);
        ctx.lineTo(w/2-3, t);
    }
}
function drawArea(r) {
    let h = canvas.height;
    let w = canvas.width;
    ctx.strokeStyle = "#007765";
    ctx.fillStyle = "#007765";
    ctx.beginPath();
    ctx.arc(w/2,h/2,r*size,0,Math.PI/2*3,true);
    ctx.moveTo(w/2, h/2-r*size);
    ctx.lineTo(w/2-r/2*size, h/2);
    ctx.lineTo(w/2, h/2);
    ctx.lineTo(w/2, h/2+r/2*size);
    ctx.lineTo(w/2+r*size, h/2+r/2*size);
    ctx.lineTo(w/2+r*size, h/2);
    ctx.fill();
}
function drawPoint(x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(canvas.width/2+x*size,canvas.height/2-y*size,2,0,Math.PI*2, true);
    ctx.fill();
}

function clearCanvas() {
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

function drawPointsFromTable() {
    let table = document.getElementById("table-form:result-table").childNodes[3];
    for(let row of table.children){
        let x = Number(row.children[0].innerText);
        let y = Number(row.children[1].innerText);
        let ch = row.children[3].innerText;
        drawPoint(x, y, isPointInArea(x, y, radius) ? "lime":"red")
    }
}
function drawResize() {
    table = document.getElementById("table-form:result-table").childNodes[3];
    counter = 0;
    drawStep();
}

function drawStep() {
    console.log(counter);
    if (counter < table.children.length){
        let row = table.children[counter];
        if(!row.children[0].innerText) return;
        let x = Number(row.children[0].innerText);
        let y = Number(row.children[1].innerText);
        xCanvas.value = x;
        yCanvas.value = y;
        counter++;
        checkResize();
    }
}

 */

/*

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let size = 25;
let radius = 3;
let xCanvas = document.getElementById("canvas-form:xCanvas");
let yCanvas = document.getElementById("canvas-form:yCanvas");
let counter;
let table = document.getElementById("table-form:result-table").childNodes[3];
drawArea(radius);
drawAxis();
drawResize();

function handleRChange(event) {
    clearCanvas();
    radius = Number(event.target.value);
    drawArea(radius);
    drawAxis();
    setTimeout(()=>drawResize(), 10);
}

function handleSubmit() {
    clearCanvas();
    drawArea(radius);
    drawAxis();
    drawResize();
}

function isPointInArea(x,y,r) {
    return ((x<=0 && y>=0 && y<=(2*x+r)) || (x>=0 && y>=0 && x*x+y*y<=r*r) || (x>=0 && y<=0 && x<=r && y>=-r/2));
}

function handleCanvasClick(event) {
    let obj = event.target;
    let x = Number(((event.pageX - window.pageXOffset - obj.getBoundingClientRect().x - obj.width/2)/size).toFixed(2));
    let y = Number((-(event.pageY - window.pageYOffset - obj.getBoundingClientRect().y - obj.height/2)/size).toFixed(2));
    if(x>=-5 && x<=3 && y>=-5 && y<=5){
        xCanvas.value = x;
        yCanvas.value = y;
        checkCanvas();
    }
}

 */