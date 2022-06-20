function ottieniData() {
    var months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]

    dataInput = document.getElementById("dateInput").value;
    data = new Date(dataInput);

    var day = data.getDate();
    var month = data.getMonth() + 1;
    var today = "../dateStoriche/" + month + "/" + day + ".html";

    console.log(today);

    if(!isNaN(month) && !isNaN(day)) {
        document.getElementById('today').setAttribute('include-date', today);
        document.getElementById('todayName').innerHTML = day + " " + months[month - 1];
        includeDate();
    } else {
        document.getElementById('todayName').innerHTML = "gg/mm";
        document.getElementById('today').innerHTML = "Nessuna ricorrenza";
    }
}