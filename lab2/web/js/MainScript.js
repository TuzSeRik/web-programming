window.onload = start;
function start() {
    draw();
    addListeners();
}

function draw() {
    window.alpha = document.getElementById("quadrant-one");
    window.beta = document.getElementById("quadrant-two");
    window.gamma = document.getElementById("quadrant-three");
    window.delta = document.getElementById("quadrant-four");

    drawAxes();
    drawR(document.getElementById("r-visible").value);

    drawQuadrant(alpha.dataset.symbol, alpha.value);
    drawQuadrant(beta.dataset.symbol, beta.value);
    drawQuadrant(gamma.dataset.symbol, gamma.value);
    drawQuadrant(delta.dataset.symbol, delta.value);

    alpha.addEventListener("change", alphaForward);
    beta.addEventListener("change", betaForward);
    gamma.addEventListener("change", gammaForward);
    delta.addEventListener("change", deltaForward);
}

function addListeners() {
    window.xInput = document.getElementById("x-visible");
    window.xL = document.getElementById("x-left");
    window.xR = document.getElementById("x-right");
    window.xC = document.getElementById("x-radio");
    window.yInput = document.getElementById("y-visible");
    window.yL = document.getElementById("y-left");
    window.yR = document.getElementById("y-right");
    window.yC = document.getElementById("y-radio");
    window.rInput = document.getElementById("r-visible");
    window.rL = document.getElementById("r-left");
    window.rR = document.getElementById("r-right");
    window.rC = document.getElementById("r-radio");
    window.submit = document.getElementById("submit");
    window.axes = document.getElementById("axes");

    xInput.addEventListener("keyup", xCheck);
    xL.addEventListener("keyup", xCheck);
    xR.addEventListener("keyup", xCheck);
    xC.addEventListener("change", xCheck);

    yInput.addEventListener("keyup", yCheck);
    yL.addEventListener("keyup", yCheck);
    yR.addEventListener("keyup", yCheck);
    yC.addEventListener("change", yCheck);

    rInput.addEventListener("keyup", rCheck);
    rL.addEventListener("keyup", rCheck);
    rR.addEventListener("keyup", rCheck);
    rC.addEventListener("change", rCheck);

    axes.addEventListener("click", submitClickCanvas);
    submit.addEventListener("click", submitClickButton);
}

function alphaForward(event) {
    event.preventDefault();
    drawQuadrant(alpha.dataset.symbol, alpha.value);
}

function betaForward(event) {
    event.preventDefault();
    drawQuadrant(beta.dataset.symbol, beta.value);
}

function gammaForward(event) {
    event.preventDefault();
    drawQuadrant(gamma.dataset.symbol, gamma.value);
}

function deltaForward(event) {
    event.preventDefault();
    drawQuadrant(delta.dataset.symbol, delta.value);
}