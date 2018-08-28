document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

function calculateResults(e) {
  e.preventDefault();
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");

  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const calculatedMonthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(calculatedMonthly)) {
    monthlyPayment.value = calculatedMonthly.toFixed(2);
    totalPayment.value = (calculatedMonthly * calculatedPayments).toFixed(2);
    totalInterest.value = (
      calculatedMonthly * calculatedPayments -
      principal
    ).toFixed(2);
  } else {
    console.log("Please check your number");
  }
}
