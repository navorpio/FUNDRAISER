// Get a reference to the form and the input elements
const beneficiaryForm = document.getElementById('beneficiaryForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const sexInput = document.getElementById('sex');
const residencyInput = document.getElementById('residency');

// Add an event listener to handle form submissions
beneficiaryForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values entered by the user
    const name = nameInput.value;
    const age = ageInput.value;
    const sex = sexInput.value;
    const residency = residencyInput.value;

    // Perform form validation here if needed

    // You can process the form data or take further actions here
    // For demonstration purposes, we'll log the data to the console
    console.log('Beneficiary\'s Name:', name);
    console.log('Age:', age);
    console.log('Sex:', sex);
    console.log('Residency:', residency);

    // You can add more functionality here, such as sending the data to a server
});
var nextbtn = document.getElementById("next-btn")
var prevbtn = document.getElementById("prev-btn")
var proceedbtn = document.getElementById("proceed-btn")

function nextpage(){
    window.location  = "third.html"
}
function prevpage(){
    window.location  = "first.html"
}
nextbtn.addEventListener("click", nextpage)
proceedbtn.addEventListener("click", nextpage)
prevbtn.addEventListener("click",prevpage)
