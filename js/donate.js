// Home Button
function home() {
    window.location.href = '/index.html';
}

// Blog Button
function blog() {
    window.location.href = '/blog.html';
}

// Donation Button
const donateButton = document.getElementById("donate-button");
donateButton.addEventListener('click', function() {
    const totalExpenses = parseFloat(document.getElementById('total-expenses').innerText);
    const cashAdded = parseFloat(document.getElementById('cash-added').innerText);
    const amount = parseFloat(document.getElementById('amount').value);
    document.getElementById('total-expenses').innerText = totalExpenses - amount;
    document.getElementById('cash-added').innerText = cashAdded + amount;
});
