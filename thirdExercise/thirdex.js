document.getElementById("Up").addEventListener('click', function(evt){
    h = document.getElementById("wrapper").style.height;
    if(document.getElementById("wrapper").style.height == h){
        document.getElementById("wrapper").style.height = "500px";
        document.getElementById("wrapper").style.width = "800px";
     }
},false)

document.getElementById("left").addEventListener('click', function(evt){
    w = document.getElementById("wrapper").style.width;
    if(document.getElementById("wrapper").style.width == w){
        document.getElementById("wrapper").style.height = "800px";
        document.getElementById("wrapper").style.width = "500px"; 
    }
},false)

