const calculateTemp = () => {
    const numberTemp = parseFloat(document.getElementById('temp').value); // Parse the input value to a number
    const tempSelected = document.getElementById("temp_diff");
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value; // Get the selected value directly

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }

    const fehToCel = (fehr) => {
        let celsius = Math.round((fehr - 32) * 5/9);
        return celsius;
    }

    let result;

    if (valueTemp === 'cel') { 
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`; 
    } else {
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`; 
    }
}
