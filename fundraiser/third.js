const elaborateForm = document.getElementById('elaborateForm');
const photoInput = document.getElementById('photoInput');


elaborateForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

 
    const fundraiserName = document.getElementById('fundraiserName').value;
    const cause = document.getElementById('cause').value;
    const description = document.getElementById('description').value;

   
    console.log('Fundraiser Name:', fundraiserName);
    console.log('Cause:', cause);
    console.log('Description:', description);

});


document.querySelector('.upload label').addEventListener('click', function () {
    photoInput.click();
});
var nextbtn = document.getElementById("next-btn")
var prevbtn = document.getElementById("prev-btn")
var proceedbtn = document.getElementById("proceed-btn")

function nextpage(){
    window.location  = "fourth.html"
}
function prevpage(){
    window.location  = "first.html"
}
nextbtn.addEventListener("click", nextpage)
proceedbtn.addEventListener("click", nextpage)
