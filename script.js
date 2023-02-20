const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll(".price");
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += Number(prices[i].textContent);
  }
  const totalCell = document.getElementById("total");
  totalCell.textContent = `Total Price: ${total}`;
  
};

getSumBtn.addEventListener("click", getSum);

