let totalDonations = 0;

function donation() {
    // Get the total expenses and donation amount
    const totalExpensesElement = document.getElementById('expenses');
    const totalExpenses = parseFloat(totalExpensesElement.textContent);
    const donationAmount = parseFloat(document.getElementById('amount').value);
    const cashAddedElement = document.getElementById('cash-added');

    // Calculate the new total
    const newTotal = totalExpenses - donationAmount;

    // Check if the new total is positive
    if (newTotal >= 0) {
        // Update the total expenses
        totalExpensesElement.textContent = newTotal.toFixed(2);

        // Accumulate the donation amount
        totalDonations += donationAmount;

        // Update the cash-added element with the total donations
        cashAddedElement.textContent = totalDonations.toFixed(2);

        // Show the modal
        const modal = document.getElementById('my_modal_5');
        modal.showModal();

        // Display the donation amount in the modal
        const donationDisplay = document.createElement('p');
        donationDisplay.textContent = `You have donated: ${donationAmount} BDT`;
        modal.querySelector('.modal-box').appendChild(donationDisplay);
    } else {
        alert('Donation amount exceeds total expenses.');
    }
}
