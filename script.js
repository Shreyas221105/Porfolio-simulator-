// 1. Global Variables
let cryptoData = []; 
let chartInstance = null; // Keeps track of the active graph
const container = document.getElementById('asset-container');
const modal = document.getElementById('chart-modal');

// 2. Fetch API Data
async function fetchMarketData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=false');
        
        if (!response.ok) throw new Error("Network response was not ok");
        
        cryptoData = await response.json();
        renderAssets(cryptoData); 

    } catch (error) {
        container.innerHTML = `<p style="color: red;">Error loading data: ${error.message}. CoinGecko might be rate-limiting you, wait a moment and refresh.</p>`;
    }
}

// 3. Render Data to the Screen
function renderAssets(dataArray) {
    if (dataArray.length === 0) {
        container.innerHTML = "<p>No assets found.</p>";
        return;
    }

    const htmlString = dataArray.map(coin => {
        return `
            <div class="card">
                <img src="${coin.image}" alt="${coin.name}">
                <h2>${coin.name} (${coin.symbol.toUpperCase()})</h2>
                <p>Price: ₹${coin.current_price.toLocaleString()}</p>
                <p>Rank: #${coin.market_cap_rank}</p>
                <button class="chart-btn" onclick="openChart('${coin.id}', '${coin.name}')">View 7-Day Trend</button>
            </div>
        `;
    }).join(''); 

    container.innerHTML = htmlString;
}

// 4. Implement Search Feature with Debounce Optimization
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const handleSearch = debounce((event) => {
    const searchTerm = event.target.value.toLowerCase();
    
    const filteredData = cryptoData.filter(coin => {
        return coin.name.toLowerCase().includes(searchTerm) || 
               coin.symbol.toLowerCase().includes(searchTerm);
    });
    
    renderAssets(filteredData);
}, 300); // Waits 300ms after user stops typing before filtering

document.getElementById('search-bar').addEventListener('input', handleSearch);

// 5. Implement Sorting Feature
document.getElementById('sort-dropdown').addEventListener('change', (event) => {
    const sortType = event.target.value;
    let sortedData = [...cryptoData]; 

    if (sortType === 'price-asc') {
        sortedData.sort((a, b) => a.current_price - b.current_price);
    } else if (sortType === 'price-desc') {
        sortedData.sort((a, b) => b.current_price - a.current_price);
    } else if (sortType === 'name-asc') {
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderAssets(sortedData);
});

// 6. Implement Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 7. Implement Chart Feature (Next-Level Optimization)
async function openChart(coinId, coinName) {
    document.getElementById('modal-title').innerText = `Loading data for ${coinName}...`;
    modal.classList.remove('hidden');

    try {
        // Fetch 7 days of historical data from CoinGecko
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=inr&days=7`);
        const data = await res.json();
        
        // Data format is [timestamp, price]. We need to map it out.
        const prices = data.prices;
        const labels = prices.map(point => {
            const date = new Date(point[0]);
            return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:00`;
        });
        const dataPoints = prices.map(point => point[1]);

        document.getElementById('modal-title').innerText = `${coinName} (7-Day Price in INR)`;
        renderChart(labels, dataPoints);
    } catch (error) {
        document.getElementById('modal-title').innerText = "Error loading chart data.";
        console.error("Chart fetch error:", error);
    }
}

function renderChart(labels, data) {
    const ctx = document.getElementById('crypto-chart').getContext('2d');
    
    // If a chart already exists, destroy it before making a new one
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Determine line color based on dark mode
    const isDarkMode = document.body.classList.contains('dark-mode');
    const lineColor = isDarkMode ? '#66b2ff' : '#007bff';

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price',
                data: data,
                borderColor: lineColor,
                borderWidth: 2,
                pointRadius: 0, // Removes the bulky dots on the line
                tension: 0.1 // Slight curve to the line
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// Close Modal Logic
document.querySelector('.close-btn').addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Close modal if user clicks outside the modal content box
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

// Initialize the app
fetchMarketData();
