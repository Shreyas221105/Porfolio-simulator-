PROTRACKER

A virtual money tracker and investment portfolio simulator with live API data.
ProTrack is a real-time web application designed to help users track their virtual investments across Crypto, Stocks, and Mutual Funds. It provides a "safe-space" for users to simulate buying assets, tracking live market fluctuations, and analyzing their risk exposure without risking actual capital.
🛠️ Tech Stack
Frontend: React.js (UI Components & State Management)

Backend: Node.js & Express (API Routing & Logic)

Database: MongoDB (User portfolios & transaction history)

Data Visualization: Chart.js or Recharts (Growth & Allocation graphs)

🌐 Public API Integration
This project utilizes the CoinGecko API (Free Tier) to fetch live market prices for Cryptocurrencies in INR.

Endpoint Example: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr

✨ Key FeaturesLive Asset Tracking: Add investments (Name, Quantity, Buy Price) and see their current value update in real-time.Dynamic Profit/Loss: Automatic calculation of ROI based on the difference between Invested Value and Current Market Value.Smart Risk Scoring: A weighted algorithm that assigns risk levels (0.3 to 0.9) based on asset types (Mutual Funds vs. Crypto).Formula: $\text{Risk Score} = \frac{\sum (\text{Asset Value} \times \text{Risk Weight})}{\text{Total Portfolio Value}}$Historical Graphing: A line chart visualizing the growth of total portfolio value over time.Search & Filter: Users can search through their transaction history or filter their view by asset category (e.g., "Show only Crypto").

🔮 Future Enhancements
Price Alerts: Notifications when an asset hits a specific target price.

Diversification Score: Suggestions to balance the portfolio if it becomes "too heavy" in one asset class.

Future Predictions: Simple linear projections of portfolio value based on 5% or 10% growth scenarios.
THIS WILL HELP IN FUTURE PREDICTIION
