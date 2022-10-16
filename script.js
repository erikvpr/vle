(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }
            var ampm = h >= 12 ? 'PM' : 'AM'; 

            c.innerHTML = h%12 + ":" + m + ":" + s + " " + ampm;
            
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        let fname = document.getElementById("fname");
        if (fname.value === "") {
            
            alert("Palun sisestage eesnimi");
            
            fname.focus();
            
            return;
        }
        let lname = document.getElementById("lname");
        if (lname.value === "") {
            
            alert("Palun sisestage perekonnanimi");
            
            lname.focus();
            
            return;
        }


        let linn = document.getElementById("linn");
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;
        }
        if (linn.value === "trt") {
            
            e.innerHTML = "2,5 &euro;";
                return;
        }
        if (linn.value === "tln") {
                
            e.innerHTML = "0,0 &euro;";
                return;
        }
        if (linn.value === "prn") {     
            e.innerHTML = "3,0 &euro;";
                return;
            }
        if (linn.value === "nrv") {     
            e.innerHTML = "2,5 &euro;";
                 return;
            
        } else {
            
            e.innerHTML = "x,xx &euro;";
            
        }        

        console.log("Tarne hind on arvutatud");
    }
    
})();

// map

let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

let map;

function GetMap() {
    
    "use strict";

    let centerPoint = new Microsoft.Maps.Location(
        58.36305, 
        25.59519
        )

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 7,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
    let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Viljandi vabaduse plats',
            //subTitle: 'Kena koht',
            //text: 'Viljandi'
        });

    map.entities.push(pushpin);
    var center = map.getCenter();
    var infobox = new Microsoft.Maps.Infobox(center, {
        title: 'Viljandi vabaduse plats',
        description: 'Viljandi kesklinnas asuv esindusväljak'
    });

    infobox.setMap(map);
}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

