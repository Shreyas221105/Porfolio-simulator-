# 📊 ProTracker - Capstone Project

## 🎯 Project Overview
ProTracker is a frontend web application developed as a capstone project to demonstrate core web development concepts, including API integration, DOM manipulation, and modern JavaScript data handling. The application serves as a simulated dashboard for tracking live cryptocurrency market prices.

The primary objective of this project is to refine my foundational knowledge of JavaScript by strictly applying modern array methods and asynchronous programming, bypassing the use of external frameworks or libraries.

---

## 💻 Technical Stack
* 🌐 **HTML5:** Semantic document structure.
* 🎨 **CSS3:** Custom styling, responsive layouts (Flexbox/Grid), and CSS variables for theme management.
* ⚡ **Vanilla JavaScript (ES6+):** Client-side logic, data fetching, and dynamic UI rendering.
* 🔗 **API:** CoinGecko Public API (Free Tier).

---

## 🧠 Core Concepts Demonstrated
This project was built to meet specific academic milestones, focusing heavily on the following concepts:

1. 📡 **API Integration (`fetch`):** Utilizing `async/await` to request real-time market data from the CoinGecko API, while gracefully handling potential network errors and loading states.
2. 🔄 **Array Higher-Order Functions:** Traditional `for` and `while` loops were intentionally avoided. All data manipulation is handled via:
   * `.map()` to generate dynamic HTML elements for the asset grid.
   * `.filter()` to power the search bar functionality based on user input.
   * `.sort()` to reorganize data based on price or alphabetical order.
3. 🖱️ **Event Handling & DOM Manipulation:** Creating an interactive user experience through event listeners (`input`, `change`, `click`) to update the UI without reloading the page.

---

## ✨ Features Implemented
* 📈 **Live Market Feed:** Fetches and displays top cryptocurrencies, including current price (INR), market cap ranking, and symbols.
* 🔍 **Search Filtering:** Allows users to dynamically filter the displayed assets by typing a coin's name or symbol.
* 📉 **Data Sorting:** Provides dropdown functionality to arrange the market data by price (ascending/descending) or alphabetically.
* 🌗 **Light/Dark Mode Toggle:** A theme switch implemented using CSS variables to improve usability and demonstrate state toggling.
* 📱 **Responsive UI:** The layout automatically adapts to desktop, tablet, and mobile screen sizes.

---

## 🚀 Local Setup & Execution
Because this project utilizes Vanilla JavaScript and no build tools or package managers, setup is straightforward:

1. **Clone or download** this repository to your local machine.
2. **Extract** the files into a dedicated folder.
3. **Open** the `index.html` file in any modern web browser. 
*(Optional: Use the VS Code "Live Server" extension for a smoother development experience).*

---

## 🔮 Future Scope (Next Learning Phase)
As I continue to refine my knowledge, I plan to evolve this frontend prototype into a full MERN stack application. Future iterations will include:
* 🗄️ **Backend Database:** Implementing Node.js and MongoDB to allow users to create accounts and save mock portfolios.
* 🧮 **Dynamic Calculations:** Tracking simulated Profit/Loss based on user-inputted "buy prices" versus the live API data.
* ⚖️ **Risk Analysis:** Implementing a custom mathematical algorithm to assign a risk score to a user's chosen portfolio.
