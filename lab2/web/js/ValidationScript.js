function xCheck() {
    if (!(xC.checked)) {
        xInput.setAttribute("type", "text");
    }
    xInput.value = xInput.value.replace(",", ".");
    const xWarn = document.getElementById("x-warn");
    checkConditions(xInput, xL, xR, xC, xWarn);
}

function yCheck() {
    if (!(yC.checked)) {
        yInput.setAttribute("type", "text");
    }
    yInput.value = yInput.value.replace(",", ".");
    const yWarn = document.getElementById("y-warn");
    // noinspection JSSuspiciousNameCombination
    checkConditions(yInput, yL, yR, yC, yWarn);
}

function rCheck() {
    if (!(rC.checked)) {
        rInput.setAttribute("type", "text");
    }
    rInput.value = rInput.value.replace(",", ".");
    const rWarn = document.getElementById("r-warn");
    checkConditions(rInput, rL, rR, rC, rWarn);
}

function checkConditions(input, leftB, rightB, radio, warn) {
    if (!(!isFinite(Number(leftB.value)) || !(/0*/).test(leftB.value) && Number(leftB.value) === 0 || leftB.value ==="")) {
        leftB = leftB.value;
    } else {leftB = -100}
    if (!(!isFinite(Number(rightB.value)) || !(/0*/).test(rightB.value) && Number(rightB.value) === 0 || rightB.value ==="")) {
        rightB = rightB.value;
    } else {rightB = 100}

    if (!(radio.checked)) {
        if (!isFinite(Number(input.value)) || !(/0*/).test(input.value) && Number(input.value) === 0) {
            warn.innerText = "Введите число цифрами";
            warn.style.visibility = "visible";
            submit.setAttribute("disabled", "disable");

        } else if ((Number(input.value) < leftB || Number(input.value) > rightB) && input.value !=="") {
            warn.innerText = "Число вне интервала";
            warn.style.visibility = "visible";
            submit.setAttribute("disabled", "disable");

        } else if (input.value.toString().length > 16 && input.value !== "") {
            warn.innerText = "Введите меньше цифр";
            warn.style.visibility = "visible";
            submit.setAttribute("disabled", "disable");

        } else {
            warn.style.visibility = "hidden";
            submit.removeAttribute("disabled");
        }

    }
    if (radio.checked){
        input.setAttribute("type", "number");
        input.setAttribute("step", "0.5");
        input.setAttribute("min", String(leftB));
        input.setAttribute("max", String(rightB));
    }
}