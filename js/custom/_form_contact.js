jQuery(document).ready(function() {
    // Contact form processing
    jQuery('form.contact_1', '.contact_form_1').on('submit', function(e) {
        e.preventDefault();
        var $form = jQuery(this);
        var formFields = $form.serializeArray();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = jQuery("#contact_form_email").val();

        // Validate form fields
        formFields.forEach(field => {
            if (!field.value.length) {
                $form.find('.result').html("");
                $form.find(`[name="${field.name}"]`).addClass('error_fields_class').on('focus', function() {
                    jQuery(this).removeClass('error_fields_class');
                });
            }
        });

        // Validate email
        if (!emailReg.test(emailaddressVal)) {
            $form.find('#contact_form_email').addClass('error_fields_class').on('focus', function() {
                jQuery(this).removeClass('error_fields_class');
            });
        }

        // If there are any errors, prevent submission
        if ($form.find('.error_fields_class').length) {
            $form.find('.result').addClass('sc_infobox_style_error').fadeIn().delay(3000).fadeOut();
            return;
        }

        // Send form data to PHP server if fields are not empty
        var request = $form.serialize();
        jQuery.post("include/contact-form.php", request)
            .done(function(data) {
                $form.find('.result').removeClass('sc_infobox_style_error');
                $form.find('.result').addClass('sc_infobox_style_success').html(data).fadeIn().delay(3000).fadeOut();
                $form[0].reset();
            })
            .fail(function(data) {
                $form.find('.result').addClass('sc_infobox_style_error').html("Mail cannot be sent. You need a PHP server to send mail.").fadeIn().delay(3000).fadeOut();
            });
    });
});
