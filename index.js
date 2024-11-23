const generateCentralPolygonal = (n) => {
    // Array for storing result
    let result = [1];

    // formula for A000124 of Sloane’s OEIS:
    // a(n) = (n^2 + n + 2)/2
    for (let i = 1; i <= n; i++) {
        let number = (i * i + i + 2) / 2;     // Calculate number
        result.push(number);                          // Add number into result
    }

    return result;
}

// Make a function to display the sequence
const displaySequence = (n) => {
    const sequence = generateCentralPolygonal(n);         // Generate sequence
    return sequence.join('-');                                     // Return sequence
}

const formSubmit = (e) => {
    e = e || window.event;
    e.preventDefault();                             // Prevent form from submitting

    const input = document.getElementById('input').value;       // Get value from input

    // Check if input is valid
    if (input <= 0) {
        alert('Input must be greater than 0');
        return;
    }

    document.getElementById('text').innerHTML = displaySequence(input);         // Display sequence
}