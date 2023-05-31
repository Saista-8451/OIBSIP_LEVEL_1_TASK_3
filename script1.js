document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');

    convertBtn.addEventListener('click', function() {
        const temperatureInput = document.getElementById('temperature');
        const unitInput = document.getElementById('unit');

        const temperature = parseFloat(temperatureInput.value);
        const unit = unitInput.value;

        if (isNaN(temperature)) {
            resultDiv.innerText = 'Please enter a valid temperature.';
            return;
        }

        let convertedTemperature;
        let convertedUnit;

        if (unit === 'celsius') {
            convertedTemperature = (temperature * 9/5) + 32;
            convertedUnit = 'Fahrenheit';
        } else if (unit === 'fahrenheit') {
            convertedTemperature = (temperature - 32) * 5/9;
            convertedUnit = 'Celsius';
        } else if (unit === 'kelvin') {
            convertedTemperature = temperature - 273.15;
            convertedUnit = 'Celsius';
        }

        resultDiv.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
    });
});
