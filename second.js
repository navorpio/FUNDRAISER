
const beneficiaryForm = document.getElementById('beneficiaryForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const sexInput = document.getElementById('sex');
const residencyInput = document.getElementById('residency');


beneficiaryForm.addEventListener('submit', function (event) {
    event.preventDefault();


    const name = nameInput.value;
    const age = ageInput.value;
    const sex = sexInput.value;
    const residency = residencyInput.value;

    console.log('Beneficiary\'s Name:', name);
    console.log('Age:', age);
    console.log('Sex:', sex);
    console.log('Residency:', residency);


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
