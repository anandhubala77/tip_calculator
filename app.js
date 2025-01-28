function calculateTip() {
  const amount = parseInt(document.querySelector("#billAmount").value);
  const tip = document.querySelector("#tipPercentage").value;

  if (isNaN(amount) || tip === "") {
    alert("Please fill the fields");
  } else {
    const tipAmount = (amount * tip) / 100;
    const totalBill = amount + tipAmount;
    document.querySelector("#tipAmount").innerHTML = `₹ ${tipAmount.toFixed(2)}`;
    document.querySelector("#totalBill").innerHTML = `₹ ${totalBill.toFixed(2)}`;
  }
}

function reset() {
  document.querySelector("#billAmount").value = "";
  document.querySelector("#tipPercentage").value = "";
  document.querySelector("#tipAmount").innerHTML = "₹ 0.00";
  document.querySelector("#totalBill").innerHTML = "₹ 0.00";
}
