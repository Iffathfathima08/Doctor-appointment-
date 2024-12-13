
const dayDropdown = document.getElementById("date");
function populateDays() {
  dayDropdown.innerHTML = "";
  for (let i = 1; i <= 30; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    dayDropdown.appendChild(option);
  }
}
window.onload = populateDays;

//success handling
const form = document.getElementById('appointment-form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission
  window.location.href = "success.html"; // Redirect to the success page
});
