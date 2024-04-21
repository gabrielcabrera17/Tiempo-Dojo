function alertaCiudad(elementoCiudad){
    alert("Cargando Informe Meteorológico...");
}
function removerCookies(elementoARemover){
    elementoARemover.closest('.cookies').remove();
}
//(0 °C × 9/5) + 32 = 32 °F

function modificarTemperatura(metraje){
    if(metraje.value === "°F"){
        /* Temperatura Rain 1*/
        medida1= document.querySelector("#tempRain");
        temperatura = Number(medida1.textContent); 
        convirtiendo = temperatura * 9/5 + 32;
        medida1.innerHTML  = convirtiendo.toFixed(0) ; 
    
        medida2 = document.querySelector("#tempRain2");
        temperatura2 = Number(medida2.textContent); 
        convirtiendo = temperatura2 * 9/5 + 32;
        medida2.innerHTML = convirtiendo.toFixed(0); 
        /* --------------- */
        /* Temepratura Sun */
        medida1= document.querySelector("#tempSun");
        temperatura = Number(medida1.textContent); 
        convirtiendo = temperatura * 9/5 + 32;
        medida1.innerHTML = convirtiendo.toFixed(0); 
       
        medida2 = document.querySelector("#tempSun2");
        temperatura2 = Number(medida2.textContent); 
        convirtiendo = temperatura2 * 9/5 + 32;
        medida2.innerHTML = convirtiendo.toFixed(0); 
        /* --------------- */
        /* Temepratura Cloud*/
        medida1= document.querySelector("#tempCloud");
        temperatura = Number(medida1.textContent); 
        convirtiendo = temperatura * 9/5 + 32;
        medida1.innerHTML = convirtiendo.toFixed(0); 
       
        medida2 = document.querySelector("#tempCloud2");
        temperatura2 = Number(medida2.textContent); 
        convirtiendo = temperatura2 * 9/5 + 32;
        medida2.innerHTML = convirtiendo.toFixed(0); 
        /* --------------- */
        /* Temepratura Sun 2*/
        medida1= document.querySelector("#tempSunOne");
        temperatura = Number(medida1.textContent); 
        convirtiendo = temperatura * 9/5 + 32;
        medida1.innerHTML = convirtiendo.toFixed(0); 
       
        medida2 = document.querySelector("#tempSunTwo");
        temperatura2 = Number(medida2.textContent); 
        convirtiendo = temperatura2 * 9/5 + 32;
        medida2.innerHTML = convirtiendo.toFixed(0); 

    }else{
                /* Temperatura Rain 1 */
                let medida1 = document.querySelector("#tempRain");
                let temperatura = Number(medida1.textContent);
                let convirtiendo = (temperatura - 32) * 5 / 9;
                medida1.innerHTML = convirtiendo.toFixed(0);
        
                let medida2 = document.querySelector("#tempRain2");
                let temperatura2 = Number(medida2.textContent);
                convirtiendo = (temperatura2 - 32) * 5 / 9;
                medida2.innerHTML = convirtiendo.toFixed(0);
                /* --------------- */
                /* Temperatura Sun */
                medida1 = document.querySelector("#tempSun");
                temperatura = Number(medida1.textContent);
                convirtiendo = (temperatura - 32) * 5 / 9;
                medida1.innerHTML = convirtiendo.toFixed(0);
        
                medida2 = document.querySelector("#tempSun2");
                temperatura2 = Number(medida2.textContent);
                convirtiendo = (temperatura2 - 32) * 5 / 9;
                medida2.innerHTML = convirtiendo.toFixed(0);
                /* --------------- */
                /* Temperatura Cloud */
                medida1 = document.querySelector("#tempCloud");
                temperatura = Number(medida1.textContent);
                convirtiendo = (temperatura - 32) * 5 / 9;
                medida1.innerHTML = convirtiendo.toFixed(0);
        
                medida2 = document.querySelector("#tempCloud2");
                temperatura2 = Number(medida2.textContent);
                convirtiendo = (temperatura2 - 32) * 5 / 9;
                medida2.innerHTML = convirtiendo.toFixed(0);
                /* --------------- */
                /* Temperatura Sun 2 */
                medida1 = document.querySelector("#tempSunOne");
                temperatura = Number(medida1.textContent);
                convirtiendo = (temperatura - 32) * 5 / 9;
                medida1.innerHTML = convirtiendo.toFixed(0);
        
                medida2 = document.querySelector("#tempSunTwo");
                temperatura2 = Number(medida2.textContent);
                convirtiendo = (temperatura2 - 32) * 5 / 9;
                medida2.innerHTML = convirtiendo.toFixed(0);
        
    }
}

