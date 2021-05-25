var secret=(Math.random() * 100).toFixed(0);
function dosomething() {
    myinput = document.getElementById("myinput").value;
    names = document.getElementsByClassName("output");
    alert(names);
    for (i =0; i < names.length; i++){
        names[i].innerText = myinput;
    }
} 

