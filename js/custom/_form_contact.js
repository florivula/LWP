function sendMail(){
    let parms={
        contact_form_username: document.getElementById("contact_form_username").value,
        contact_form_email: document.getElementById("contact_form_email").value,
        contact_form_message: document.getElementById("contact_form_message").value,
    }

    emailjs.send("service_rwjsqjh","template_gdpqzw7", parms).then(alert("Email sent!"))
}