(function() {
    emailjs.init("ULcqlqFbDay29LCF4");
})();

function sendMailJoin(event) {
    event.preventDefault();

    let parms = {
        name: document.getElementById("contact_form_username").value,
        email: document.getElementById("contact_form_email").value,
        menu_select: document.getElementById("menu_select").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_9xy9hwr", "TEMPLATE NR QITU", parms)
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
