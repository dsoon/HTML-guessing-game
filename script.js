var secret=(Math.random() * 100).toFixed(0);
function dosomething() {
    names = document.getElementsByClassName("output");
    alert(names);
    for (i =0; i < names.length; i++){
        names[i].hidden = true;
    }
} 

