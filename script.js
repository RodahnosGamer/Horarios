const dayt = new Date();
const semana = dayt.getDay();
const diadasemana = String(semana);


function start(){
    calcday();
}
function calcday(){




    if (diadasemana == 6){
        document.getElementById("demo").innerHTML = "Proxima Live: Hoje as 19:30 🐼"
        document.getElementById("sabadou").style.borderColor = "#fc4848";
        return;
    }
    if (diadasemana == 0){
        document.getElementById("demo").innerHTML = "Proxima Live: Hoje as 18:30🦓"
        document.getElementById("domingou").style.borderColor = "#fc4848";
        return;
    }
    if (diadasemana == 1){
        document.getElementById("demo").innerHTML = "Proxima Live: Em 5 dias 🐱‍🚀"
        return;
    }
    if (diadasemana == 2){
        document.getElementById("demo").innerHTML = "Proxima Live: Em 4 dias 🐆"
        return;
    }
    if (diadasemana == 3){
        document.getElementById("demo").innerHTML = "Proxima Live: Em 3 dias 🐐"
        return;
    }
    if (diadasemana == 4){
        document.getElementById("demo").innerHTML = "Proxima Live: Em 2 dias 🐍"
        return;
    }
    if (diadasemana == 5){
        document.getElementById("demo").innerHTML = "Proxima Live: Amanhã 🐬"
        return;
    }
    
}


