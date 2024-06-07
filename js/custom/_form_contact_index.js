function sendMailQuote(){
    let parms={
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        menu_select: document.getElementById("menu_select").value,
    };

    emailjs.send("service_rwjsqjh","template_sk1yf9m", parms).then(alert("Email sent!"))
}