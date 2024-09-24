document.getElementById('btn-add-money').addEventListener('click', function(event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoneyInput);
    
    if (!isNaN(addMoneyNumber) && addMoneyNumber > 0) {
        const balanceNavbar = document.getElementById('account-balance-navbar').innerText.replace(' BDT', '');
        const balanceForm = document.getElementById('account-balance-form').innerText.replace(' BDT', '');
        const balanceNumber = parseFloat(balanceNavbar);
        const newBalance = addMoneyNumber + balanceNumber;
        
        document.getElementById('account-balance-navbar').innerText = newBalance + ' BDT';
        document.getElementById('account-balance-form').innerText = newBalance + ' BDT';
        
        // Show success alert
        document.getElementById('custom-alert').classList.remove('hidden');
        document.getElementById('alert-title').innerText = 'Congrates';
        document.getElementById('alert-image').src = 'image/coin (1).png';
        document.getElementById('alert-text').innerText = 'You Have Donated for Humankind';
        document.getElementById('alert-message-title').innerText = 'Successfully';
    } else {
        alert('Invalid Donation Amount');
    }
});

document.getElementById('alert-close').addEventListener('click', function() {
    document.getElementById('custom-alert').classList.add('hidden');
});
