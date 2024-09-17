document.getElementById('slotForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the input values
    const name = document.getElementById('name').value;
    const segment = document.getElementById('segment').value;

    if (name && segment) {
        // Save to local storage
        const slotSelection = {
            name: name,
            segment: segment
        };

        localStorage.setItem('slotSelection', JSON.stringify(slotSelection));

        // Display confirmation
        document.getElementById('result').innerText = `Thank you ${name}! You've successfully booked ${segment}.`;

        // Optionally, reset the form
        document.getElementById('slotForm').reset();
    } else {
        alert('Please fill in both fields.');
    }
});
