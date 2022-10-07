// Create Arrow function to get each of the input value
const randomNoGenerator = () => {
  let min = document.querySelector("#num1").value;
  let max = document.querySelector("#num2").value;

  // Give condition to avoid empty input
  if (min === "" || max === "") {
    alert("One or more field are empty");
    return;
  }
  // Converting the values from string to float or integer
  min = parseFloat(min);
  max = parseFloat(max);

  // Get random number with the random math method and pass to the inner html result
  let randomNo = Math.floor(Math.random() * (max - min + 1) + min);
  document.querySelector("#result").innerHTML = `Result is: ${Math.round(
    randomNo
  )}`;
};
