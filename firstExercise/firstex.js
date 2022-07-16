count = 0;
document.getElementById("1st").addEventListener('click', function(evt){
    count++;
    document.getElementById("sumOfPoint1").innerText = count;
    if(count == 5){
        document.getElementById("header").innerText = "Ο Πρώτος παίκτης είναι νικητής"
        document.getElementById("header").style.fontSize = "xx-large";
        document.getElementById("1st").disabled = true;
        document.getElementById("2nd").disabled = true;
    }
},false)

count2 = 0;
document.getElementById("2nd").addEventListener('click', function(evt){
    count2++;
    document.getElementById("sumOfPoint2").innerText = count2;
    if(count2 == 5){
        document.getElementById("header").innerText = "Ο Δεύτερος παίκτης είναι νικητής"
        document.getElementById("header").style.fontSize = "xx-large";
        document.getElementById("1st").disabled = true;
        document.getElementById("2nd").disabled = true;
    }
},false)

