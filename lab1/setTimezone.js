function setTimezone(){   
    document.getElementById("timezone").value=Intl.DateTimeFormat().resolvedOptions().timeZone;
}