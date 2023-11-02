function convertValues(event) 
{
    event.preventDefault();
    // Get the value entered by the user
    var celsius = parseFloat(document.getElementById('celsiusInput').value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit
        var fahrenheit = (celsius * 9/5) + 32;
        // Display the result
        document.getElementById('result').innerHTML = celsius + " degrees Celsius is " + fahrenheit.toFixed(2) + " degrees Fahrenheit.";
    } else {
        // Display an error message if the input is not a valid number
        document.getElementById('result').innerHTML = "Please enter a valid number for Celsius.";
    }
}
