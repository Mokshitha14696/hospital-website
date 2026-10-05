```javascript
// Get the appointment form

const appointmentForm = document.getElementById("appointmentForm");

const formMessage = document.getElementById("formMessage");


// When the user submits the form

appointmentForm.addEventListener("submit", function(event) {

    // Prevent page from refreshing

    event.preventDefault();


    // Get patient name

    const name = document.getElementById("name").value;


    // Get selected department

    const department =
        document.getElementById("department").value;


    // Display confirmation message

    formMessage.textContent =
        "Thank you, " + name +
        "! Your appointment request for " +
        department +
        " has been received.";


    // Clear the form

    appointmentForm.reset();

});
```
