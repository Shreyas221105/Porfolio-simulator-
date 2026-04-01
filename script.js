async function getPrice() {
  const coin = document.getElementById("coinInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (!coin) {
    resultDiv.innerHTML = "⚠️ Please enter a coin name";
    return;
  }

  resultDiv.innerHTML = "⏳ Loading...";

  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=inr`
    );

    const data = await response.json();

    if (!data[coin]) {
      resultDiv.innerHTML = "❌ Coin not found!";
      return;
    }

    const price = data[coin].inr;

    resultDiv.innerHTML = `
      💰 ${coin.toUpperCase()} Price: ₹${price}
    `;
  } catch (error) {
    resultDiv.innerHTML = "❌ Error fetching data";
  }
}
