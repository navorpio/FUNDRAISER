
const amountForm = document.getElementById('amountForm');
const amountInput = document.getElementById('amount');
const targetDateInput = document.getElementById('targetDate');


amountForm.addEventListener('submit', function (event) {
    event.preventDefault(); 


    const amount = amountInput.value;
    const targetDate = targetDateInput.value;

  
    console.log('Amount to be Raised:', amount);
    console.log('Target Date:', targetDate);


});
var nextbtn = document.getElementById("next-btn")
var prevbtn = document.getElementById("prev-btn")
var proceedbtn = document.getElementById("proceed-btn")
function nextpage(){
    window.location  = "fifth.html"
}
function prevpage(){
    window.location  = "third.html"
}
nextbtn.addEventListener("click", nextpage)
proceedbtn.addEventListener("click", nextpage)
prevbtn.addEventListener("click",prevpage)
