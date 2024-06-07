(function() {
    emailjs.init("ULcqlqFbDay29LCF4"); // Replace with your EmailJS user ID
})();

function sendMailQuote(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    let parms = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        menu_select: document.getElementById("menu_select").value
    };

    emailjs.send("service_9xy9hwr", "template_wtwkyw3", parms)
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