const getTotalBtn = document.getElementById("getTotalBtn");

getTotalBtn.addEventListener("click", () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += Number(prices[i].textContent);
  }
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = `Total Price: ${total} Rs`;
  totalRow.appendChild(totalCell);
  const table = document.querySelector("table");
  table.appendChild(totalRow);
});
