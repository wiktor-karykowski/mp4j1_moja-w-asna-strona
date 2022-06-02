function calc(){
    var price = document.getElementById("price").value;
    var insurancePrice = 50;
    var days = document.getElementById("days").value;
    var insurance = document.getElementById("insurance");

    if ((days >= 2)&&(days <= 14)&&(Number.isInteger(Number(days)))){
        if (insurance.checked){
            alert("Za wypożyczenie auta na "+days+" dni, "+((days*insurancePrice)+(days*price))+" PLN wydaje się być uczciwą ceną. Skontaktuj się z nami aby dokonać rezerwacji!");
        }
        else{
            alert("Za wypożyczenie auta na "+days+" dni, "+days*price+" PLN wydaje się być uczciwą ceną. Skontaktuj się z nami aby dokonać rezerwacji!");
        }
    }

    if (days == 1){
        if (insurance.checked){
            alert("Za wypożyczenie auta na "+days+" dzień, "+((days*insurancePrice)+(days*price))+" PLN wydaje się być uczciwą ceną. Skontaktuj się z nami aby dokonać rezerwacji!");
        }
        else{
            alert("Za wypożyczenie auta na "+days+" dzień, "+(days*price)+" PLN wydaje się być uczciwą ceną. Skontaktuj się z nami aby dokonać rezerwacji!");
        }
    }
}

