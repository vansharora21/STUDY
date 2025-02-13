document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;

    if (name && email && phone && country) {
        alert('Application submitted successfully!');
    } else {
        alert('Please fill in all the fields.');
    }
});