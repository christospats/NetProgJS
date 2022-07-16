document.getElementById("Up").addEventListener('click', function(evt){
    if(document.getElementById("wrapper").style.borderTop == "white"){
        document.getElementById("wrapper").style.borderTop = "solid black";
        document.getElementById("wrapper").style.borderBottom = "solid black";
    }else{
        document.getElementById("wrapper").style.borderTop = "white";
        document.getElementById("wrapper").style.borderBottom = "white";
    }
},false)

document.getElementById("down").addEventListener('click', function(evt){
    if(document.getElementById("wrapper").style.borderLeft == "white"){
        document.getElementById("wrapper").style.borderLeft = "solid black";
        document.getElementById("wrapper").style.borderRight = "solid black";
    }else{
        document.getElementById("wrapper").style.borderLeft = "white";
        document.getElementById("wrapper").style.borderRight = "white";
    }
},false)