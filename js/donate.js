let totalDonationsNoakhali = 0;
let totalDonationsFeni = 600;
let totalDonationsInjured = 2400;

// Donate for Flood at Noakhali, Bangladesh
function donationNoakhali() {
    const totalExpensesElement = document.getElementById('expenses');
    const totalExpenses = parseFloat(totalExpensesElement.textContent);
    const donationAmount = parseFloat(document.getElementById('amount').value);
    const cashAddedElement = document.getElementById('cash-added');

    if (donationAmount < 0) {
        alert('Invalid Donation Amount');
        return;
    }

    const newTotal = totalExpenses - donationAmount;

    if (newTotal >= 0) {
        totalExpensesElement.textContent = newTotal.toFixed(2);

        totalDonationsNoakhali += donationAmount;
        cashAddedElement.textContent = totalDonationsNoakhali.toFixed(2);

        const modal = document.getElementById('my_modal_5');
        if (modal && typeof modal.showModal === 'function') {
            modal.showModal();

            const donationDisplay = document.createElement('p');
            donationDisplay.textContent = `You have donated: ${donationAmount} BDT`;
            modal.querySelector('.modal-box').appendChild(donationDisplay);
        } else {
            alert('Modal element not found or showModal method not supported.');
        }
    } else {
        alert('Invalid Donation Amount');
    }
}

// Donate for Flood Relief in Feni, Bangladesh
function donationFeni() {
    const totalExpensesElement = document.getElementById('expenses');
    const totalExpenses = parseFloat(totalExpensesElement.textContent) || 0;
    const donationAmount = parseFloat(document.getElementById('amount-feni').value) || 0;
    const cashAddedFeniElement = document.getElementById('feni-cash-added');

    if (donationAmount < 0) {
        alert('Invalid Donation Amount');
        return;
    }

    const newTotal = totalExpenses - donationAmount;

    if (newTotal >= 0) {
        totalExpensesElement.textContent = newTotal.toFixed(2);

        totalDonationsFeni += donationAmount;
        cashAddedFeniElement.textContent = totalDonationsFeni.toFixed(2);

        const modal = document.getElementById('my_modal_5');
        if (modal && typeof modal.showModal === 'function') {
            modal.showModal();

            const donationDisplay = document.createElement('p');
            donationDisplay.textContent = `You have donated: ${donationAmount} BDT`;
            modal.querySelector('.modal-box').appendChild(donationDisplay);
        } else {
            alert('Modal element not found or showModal method not supported.');
        }
    } else {
        alert('Invalid Donation Amount');
    }
}

// Aid for Injured in the Quota Movement
function donationInjuredButton() {
    const totalExpensesElement = document.getElementById('expenses');
    const totalExpenses = parseFloat(totalExpensesElement.textContent) || 0;
    const amountInjured = parseFloat(document.getElementById('amount-injured').value) || 0;
    const injuredCashAddedElement = document.getElementById('injured-cash-added');

    if (amountInjured < 0) {
        alert('Invalid Donation Amount');
        return;
    }

    const newTotal = totalExpenses - amountInjured;

    if (newTotal >= 0) {
        totalExpensesElement.textContent = newTotal.toFixed(2);

        totalDonationsInjured += amountInjured;
        injuredCashAddedElement.textContent = totalDonationsInjured.toFixed(2);

        const modal = document.getElementById('my_modal_5');
        if (modal && typeof modal.showModal === 'function') {
            modal.showModal();

            const donationDisplay = document.createElement('p');
            donationDisplay.textContent = `You have donated: ${amountInjured} BDT`;
            modal.querySelector('.modal-box').appendChild(donationDisplay);
        } else {
            alert('Modal element not found or showModal method not supported.');
        }
    } else {
        alert('Invalid Donation Amount');
    }
}

document.getElementById('feni-button').onclick = donationFeni;
document.getElementById('noakhali-button').onclick = donationNoakhali;
document.getElementById('injured-button').onclick = donationInjuredButton;
