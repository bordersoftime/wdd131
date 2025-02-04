document.addEventListener("DOMContentLoaded", function() {
    const temperature = 10; // in °C
    const windSpeed = 5; 
    const windChillElement = document.getElementById("wind-chill");
    const lastModifiedElement = document.getElementById("last-modified");

    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1) + " °C";
        } else {
            return "N/A";
        }
    }

    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
    lastModifiedElement.textContent = document.lastModified;
});


document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;