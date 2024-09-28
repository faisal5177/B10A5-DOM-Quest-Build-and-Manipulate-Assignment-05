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
    }
     else {
        alert('Invalid Donation Amount');
    }
}
 // History
 function addHistory(amount, title, Fenititle, injured) {
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-5 rounded-lg border-lg shadow-lg";
    historyItem.innerHTML = `
        <p class="text-xs">${new Date().toLocaleDateString()}</p>
        <p class="text-xs">${new Date().toLocaleTimeString()}</p>
        <p class="text-xs">Title: ${title}</p>
        <p class="text-xs">Fenititle: ${Fenititle}</p>
        <p class="text-xs">Injured: ${injured}</p>
        <p class="text-xs">Amount Donated: ${amount.toFixed(2)}</p>
    `;
    const historyContainer = document.getElementById("history-list");
    if (historyContainer) {
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    } else {
        console.error("Element with ID 'history-list' not found.");
    }
}

function handleAddHistory() {
    const amount = parseFloat(document.getElementById("amount").value);
    const title = document.getElementById("amount-title").innerText;
    const Fenititle = document.getElementById("amount-feni-title").innerText;
    const injured = document.getElementById("amount-injured").value;

    if (!isNaN(amount) && title && Fenititle && injured) {
        addHistory(amount, title, Fenititle, injured);
    } else {
        console.error("Invalid input values.");
    }
}

function toggleHistory() {
    const historySection = document.getElementById("history-section");
    if (historySection) {
        historySection.classList.toggle("hidden");
        console.log("History section toggled.");
    } else {
        console.error("Element with ID 'history-section' not found.");
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
// Home Button
function home() {
    window.location.href = '/index.html';
}

// Blog Button
function blog() {
    window.location.href = '/blog.html';
}
