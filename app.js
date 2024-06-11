// app.js

// Selecting elements
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const inputTempType = document.querySelector("#input-temp-type");
const outputTempType = document.querySelector("#output-temp-type");
const resultHeading = document.querySelector("#result-heading");
const resultValue = document.querySelector("#result-value");

// Function to convert temperature based on selected units
function convertTemperature() {
  const inputValue = parseFloat(degree.value);
  if (isNaN(inputValue)) {
    return; // Do nothing if the input is not a valid number
  }

  let convertedValue;
  if (inputTempType.value === "celsius") {
    convertedValue = convertToCelsius(inputValue, outputTempType.value);
  } else if (inputTempType.value === "fahrenheit") {
    convertedValue = convertFromFahrenheit(inputValue, outputTempType.value);
  } else if (inputTempType.value === "kelvin") {
    convertedValue = convertFromKelvin(inputValue, outputTempType.value);
  }

  resultValue.textContent = `${convertedValue.toFixed(3)}`;

  // Update result heading based on selected output unit
  updateResultHeading();
}

// Function to update result heading based on selected unit
function updateResultHeading() {
  if (outputTempType.value === "celsius") {
    resultHeading.textContent = "Result (Celsius)";
  } else if (outputTempType.value === "fahrenheit") {
    resultHeading.textContent = "Result (Fahrenheit)";
  } else if (outputTempType.value === "kelvin") {
    resultHeading.textContent = "Result (Kelvin)";
  }
}

// Function to convert Celsius to other units
function convertToCelsius(value, outputType) {
  if (outputType === "celsius") {
    return value;
  } else if (outputType === "fahrenheit") {
    return (value * 9 / 5) + 32;
  } else if (outputType === "kelvin") {
    return value + 273.15;
  }
}

// Function to convert Fahrenheit to other units
function convertFromFahrenheit(value, outputType) {
  if (outputType === "celsius") {
    return (value - 32) * 5 / 9;
  } else if (outputType === "fahrenheit") {
    return value;
  } else if (outputType === "kelvin") {
    return (value - 32) * 5 / 9 + 273.15;
  }
}

// Function to convert Kelvin to other units
function convertFromKelvin(value, outputType) {
  if (outputType === "celsius") {
    return value - 273.15;
  } else if (outputType === "fahrenheit") {
    return (value - 273.15) * 9 / 5 + 32;
  } else if (outputType === "kelvin") {
    return value;
  }
}

// Event listeners
convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertTemperature();
});

// Initial conversion when page loads
convertTemperature();
