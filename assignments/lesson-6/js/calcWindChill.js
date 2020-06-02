function calcWindChill() {

    let  t = parseFloat(document.getElementById('temp').innerHTML);
    let w = parseFloat(document.getElementById('wSpeed').innerHTML);
    console.log(w)
    console.log(t)
    
    if(t <= 50 && w > 3){
    let windChill = 35.74 + 0.6215 * t -35.75 * Math.pow(w, 0.16) + 0.4275 *t * Math.pow(w, .16);
    windChill = Math.round(windChill)
    document.getElementById('windChill').innerHTML = windChill
    }
    else{
        document.getElementById('windChillDiv').innerHTML = 'N/A'
    }
    }
    