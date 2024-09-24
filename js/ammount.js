let totalDonations = 0;

function handleDonation() {
    const inputAddMoney = document.getElementById('input-add-money');
    const showCashAddMoney = document.querySelector('.show-cash-add-money');
    const showCashOutMoney = document.getElementById('show-cash-out-money');

    let donationAmount = parseFloat(inputAddMoney.value);
    let currentBalance = parseFloat(showCashOutMoney.textContent);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a positive number for the donation amount.');
        return;
    }

    // Update the total donations
    totalDonations += donationAmount;

    // Update the displayed values
    showCashAddMoney.textContent = totalDonations.toFixed(2);
    showCashOutMoney.textContent = (currentBalance - donationAmount).toFixed(2);

    // Show the modal
    document.getElementById('my_modal_5').showModal();
}
//Donate for Flood at Noakhali end