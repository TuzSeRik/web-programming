function yCheck(event){
    var yInput = document.getElementById("y-selector");
    yInput.value = yInput.value.replace(",", ".");
    var yNanWarn = document.getElementById("nan-warn");
    var yIntervalWarn = document.getElementById("interval-warn");
    var yLengthWarn = document.getElementById("symbol-warn");
    var button = document.getElementById("submission");
    if (!isFinite(Number(yInput.value)) || !(/0*/).test(yInput.value) && Number(yInput.value) === 0){
        event.preventDefault();
        yNanWarn.hidden = false;
        yIntervalWarn.hidden = true;
        yLengthWarn.hidden = true;
        button.setAttribute("disabled", "disable");

    } else if (Number(yInput.value) < -5 || Number(yInput.value) > 3){
        event.preventDefault();
        yNanWarn.hidden = true;
        yIntervalWarn.hidden = false;
        yLengthWarn.hidden = true;
        button.setAttribute("disabled", "disable");

    } else if (yInput.value.toString().length > 16 && yInput.value != ""){
        event.preventDefault();
        yNanWarn.hidden = true;
        yIntervalWarn.hidden = true;
        yLengthWarn.hidden = false;
        button.setAttribute("disabled", "disable");

    } else{
        yNanWarn.hidden = true;
        yIntervalWarn.hidden = true;
        yLengthWarn.hidden = true;
        button.removeAttribute("disabled");
    }
}