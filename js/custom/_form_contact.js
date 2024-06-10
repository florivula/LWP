// Initialize EmailJS
(function() {
    emailjs.init("ULcqlqFbDay29LCF4"); // Replace with your EmailJS user ID
})();

// Function to handle form submission
function sendMail(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    let parms = {
        contact_form_username: document.getElementById("contact_form_username").value,
        email: document.getElementById("contact_form_email").value,
        contact_form_message: document.getElementById("contact_form_message").value
    };

    emailjs.send("service_9xy9hwr", "template_gdpqzw7", parms)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            Swal.fire({
                icon: 'success',
                title: 'Email Sent',
                text: 'Your email has been sent successfully. We will get back to you as soon as possible!',
                confirmButtonText: 'OK'
            });
        }, function(error) {
            console.error('FAILED...', error);
            Swal.fire({
                icon: 'error',
                title: 'Email Not Sent',
                text: 'Failed to send email. Please try again later or contact us directly at contact@lwp-energie.de.',
                confirmButtonText: 'OK'
            });
        });
}
