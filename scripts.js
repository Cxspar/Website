document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    var fullname = document.getElementById('full-name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validation to ensure all fields are filled
    if (!fullname || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Prepare data to send
    var formData = {
        fullname: fullname,
        email: email,
        message: message
    };

    // Send email using EmailJS
    emailjs.send('service_w1lz6de', 'template_8pkrbu6', formData)
        .then(function(response) {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Error: ' + error.text);
        });
});
