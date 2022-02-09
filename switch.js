var switched = false;

function myFunction() {
    if(!switched) {
        switched = true;
        document.getElementById("price1").innerHTML = "&dollar;19.99";
        document.getElementById("price2").innerHTML = "&dollar;24.99";
        document.getElementById("price3").innerHTML = "&dollar;39.99";
    }
    else {
        switched = false;
        document.getElementById("price1").innerHTML = "&dollar;199.99";
        document.getElementById("price2").innerHTML = "&dollar;249.99";
        document.getElementById("price3").innerHTML = "&dollar;399.99";
    }
}