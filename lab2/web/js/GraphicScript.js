function drawAxes() {
    const context = document.getElementById("axes").getContext("2d");

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
}

function drawR(r) {
    const context = document.getElementById("axes").getContext("2d");
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

function drawQuadrant(quadrant, shape) {
    const canvas = document.getElementById(quadrant);
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.translate(200, 200);
    context.beginPath();

    switch (shape) {
        case "1":
            drawTriangleSmall(context);
            break;
        case "2":
            drawTriangleBig(context);
            break;
        case "3":
            drawTriangleY(context);
            break;
        case "4":
            drawTriangleX(context);
            break;
        case "5":
            drawRectangleY(context);
            break;
        case "6":
            drawRectangleX(context);
            break;
        case "7":
            drawSquareSmall(context);
            break;
        case "8":
            drawSquareBig(context);
            break;
        case "9":
            drawCircleSmall(context);
            break;
        case "a":
            drawCircleBig(context);
            break;
        case "b":
            drawNothing(context);
    }

    context.closePath();
    context.strokeStyle = "#2f9aff";
    context.fillStyle = "#2f9aff";
    context.fill();
    context.stroke();

    switch (quadrant) {
        case "alpha":
            break;
        case "beta":
            canvas.style.transform = "rotate(90deg)";
            break;
        case "gamma":
            canvas.style.transform = "rotate(270deg)";
            break;
        case "delta":
            canvas.style.transform = "rotate(180deg)";
            break;
    }
    context.translate(-200, -200);
}

const c = 2 / 3;

function drawTriangleSmall(context) {
    context.moveTo(0, 0);
    context.lineTo(-130*c, 0);
    context.lineTo(0, -130*c);
    context.lineTo(0, 0);
}

function drawTriangleBig(context) {
    context.moveTo(0, 0);
    context.lineTo(-260*c, 0);
    context.lineTo(0, -260*c);
    context.lineTo(0, 0);
}

function drawTriangleY(context) {
    context.moveTo(0, 0);
    context.lineTo(-130*c, 0);
    context.lineTo(0, -260*c);
    context.lineTo(0, 0);
}

function drawTriangleX(context) {
    context.moveTo(0, 0);
    context.lineTo(-260*c, 0);
    context.lineTo(0, -130*c);
    context.lineTo(0, 0);
}

function drawRectangleY(context) {
    context.rect(-130*c, -260*c, 130*c, 260*c);
}

function drawRectangleX(context) {
    context.rect(-260*c, -130*c, 260*c, 130*c);
}

function drawSquareSmall(context) {
    context.rect(-130*c, -130*c, 130*c, 130*c);
}

function drawSquareBig(context) {
    context.rect(-260*c, -260*c, 260*c, 260*c);
}

function drawCircleSmall(context) {
    context.arc(0, 0, 130*c, -Math.PI, -3*Math.PI/2, false);
}

function drawCircleBig(context) {
    context.arc(0, 0, 260*c, -Math.PI, -3*Math.PI/2, false);
}

function drawNothing(context) {}

function drawPoint(x, y, color) {   //TODO This method can contain reason of false locating of point by Y coordinate
    const c = 520*2/3;

    x= (x+2)/(2*Number(rInput.value))*c+25;
    y= (y+2)/(2*Number(rInput.value))*c+25;

    let context = document.getElementById("axes").getContext("2d");
    context.beginPath();
    context.arc(x, y, 5, 0, 2*Math.PI, false);
    context.closePath();

    if (color){
        context.strokeStyle = "green";
        context.fillStyle = "green";
    }
    else {
        context.strokeStyle = "red";
        context.fillStyle = "red";
    }
    context.stroke();
}