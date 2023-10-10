const medicalBtn = document.getElementById('medicalBtn');
const memorialBtn = document.getElementById('memorialBtn');
const educationBtn = document.getElementById('educationBtn');
const selectedCause = document.getElementById('selectedCause');

// Function to update the selected cause
function updateSelectedCause(cause) {
    selectedCause.textContent = `Selected Cause: ${cause}`;
}

// Add event listeners to the buttons
medicalBtn.addEventListener('click', function() {
    updateSelectedCause('Medical');
});

memorialBtn.addEventListener('click', function() {
    updateSelectedCause('Memorial');
});

educationBtn.addEventListener('click', function() {
    updateSelectedCause('Education');
});

// ... (rest of your JavaScript code)


var nextbtn = document.getElementById("next-btn")
var prevbtn = document.getElementById("prev-btn")
var proceedbtn = document.getElementById("proceed-btn")

function nextpage(){
    window.location  = "second.html"
}
function prevpage(){
    window.location  = "second.html"
}
nextbtn.addEventListener("click", nextpage)
proceedbtn.addEventListener("click", nextpage)
// prevbtn.addEventListener("click", )