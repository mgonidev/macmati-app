const toggleBtn = document.getElementById('currency-toggle');
const prices = document.querySelectorAll('.price');
const statusMsg = document.getElementById('status-message');
const burgerMenuBtn = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

let dolarOficial = null;
let currentCurrency = localStorage.getItem('currency') || 'USD';

burgerMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = burgerMenuBtn.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});

document.addEventListener('click', (e) => {
    if (!burgerMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

async function getDolarOficial() {
    showStatus('Obteniendo cotización del dólar...', 'loading');

    try {
        const res = await fetch('https://dolarapi.com/v1/dolares/oficial');
        if (!res.ok) throw new Error('Error al obtener cotización');

        const data = await res.json();
        dolarOficial = data.venta;

        showStatus(`Cotización actualizada: $${dolarOficial} ARS por USD`, 'success');
        updatePrices();

        setTimeout(() => {
            if (statusMsg.textContent.includes('Cotización actualizada')) {
                statusMsg.style.opacity = '0';
            }
        }, 3000);

    } catch (err) {
        console.error('Error fetching exchange rate:', err);
        showStatus('No se pudo obtener la cotización. Mostrando precios en USD.', 'error');

        currentCurrency = 'USD';
        localStorage.setItem('currency', 'USD');
        updatePrices();
    }
}

function updatePrices() {
    prices.forEach(priceElem => {
        const usdValue = parseFloat(priceElem.dataset.usd);

        if (currentCurrency === 'USD') {
            priceElem.textContent = `$${usdValue} USD`;
            toggleBtn.textContent = 'Mostrar en ARS';
            toggleBtn.style.background = 'var(--mcdonalds-yellow)';
        } else if (currentCurrency === 'ARS') {
            if (dolarOficial) {
                const arsValue = (usdValue * dolarOficial).toFixed(0);
                priceElem.textContent = `$${arsValue} ARS`;
                toggleBtn.textContent = 'Mostrar en USD';
                toggleBtn.style.background = 'var(--mcdonalds-yellow)';
            } else {
                priceElem.textContent = '--- ARS';
                toggleBtn.style.background = '#ccc';
            }
        }
    });
}

function showStatus(message, type = 'info') {
    statusMsg.textContent = message;
    statusMsg.className = `status-message status-${type}`;
    statusMsg.style.opacity = '1';
}

toggleBtn.addEventListener('click', async () => {
    currentCurrency = currentCurrency === 'USD' ? 'ARS' : 'USD';
    localStorage.setItem('currency', currentCurrency);

    if (currentCurrency === 'ARS' && !dolarOficial) {
        await getDolarOficial();
    } else {
        updatePrices();
        showStatus(`Moneda cambiada a ${currentCurrency}`, 'success');

        setTimeout(() => {
            if (statusMsg.textContent.includes('Moneda cambiada')) {
                statusMsg.style.opacity = '0';
            }
        }, 2000);
    }
});

(async function init() {
    showStatus('Cargando...', 'loading');

    if (currentCurrency === 'ARS') {
        await getDolarOficial();
    } else {
        updatePrices();
        showStatus('Bienvenido a MacMati', 'success');

        setTimeout(() => {
            if (statusMsg.textContent.includes('Bienvenido')) {
                statusMsg.style.opacity = '0';
            }
        }, 2000);
    }
})();

const style = document.createElement('style');
style.textContent = `
    .status-loading {
        background: var(--mcdonalds-yellow);
        color: var(--black);
        border-left-color: var(--mcdonalds-red);
    }
    
    .status-success {
        background: #28a745;
        color: var(--white);
        border-left-color: #28a745;
    }
    
    .status-error {
        background: #dc3545;
        color: var(--white);
        border-left-color: #dc3545;
    }
    
    .status-message {
        transition: opacity 0.3s ease;
    }
    
    .burger-menu span.active:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .burger-menu span.active:nth-child(2) {
        opacity: 0;
    }
    
    .burger-menu span.active:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);
