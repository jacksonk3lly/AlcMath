
function calculateStandardDrinks(){
    var name= document.getElementById("name").value;
    var percentage =  document.getElementById("percentage").value;
    var price =  document.getElementById("price").value;
    var volume =  document.getElementById("volume").value;
    var stnds = (getStanderds(volume,percentage));

    document.getElementById("out-text").innerHTML = stnds.toFixed(2) + " standard drinks " + (price/stnds).toFixed(2) +" dollars per standard drink.";
    document.getElementById("out-head").innerHTML = name+":";
}

function getStanderds(volume,percentage){
    return ((volume)*(percentage)*(0.789));
 }



