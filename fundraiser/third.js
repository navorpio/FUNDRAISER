const elaborateForm = document.getElementById('elaborateForm');
const photoInput = document.getElementById('photoInput');

// Add an event listener to handle form submissions
elaborateForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values entered by the user
    const fundraiserName = document.getElementById('fundraiserName').value;
    const cause = document.getElementById('cause').value;
    const description = document.getElementById('description').value;

    // Perform form validation here if needed

    // You can process the form data or take further actions here
    // For demonstration purposes, we'll log the data to the console
    console.log('Fundraiser Name:', fundraiserName);
    console.log('Cause:', cause);
    console.log('Description:', description);

    // You can also handle the uploaded photo (photoInput.files) here if needed
});

// Add an event listener to allow the user to select a photo when clicking the "Insert Photo" label
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