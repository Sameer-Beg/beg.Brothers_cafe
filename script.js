const menu = {
  "Chole bhature": 75,
  "Dosa": 85,
  "Chilli patato": 75,
  "Momos": 60,
  "Burger": 45,
  "Coffe": 120
};

let total = 0;
let ordering = true;

const menuList = document.getElementById("menu-list");
const totalDisplay = document.getElementById("total");
const anotherOrderSection = document.getElementById("another-order-section");
const totalSection = document.getElementById("total-section");

// Render menu
function renderMenu() {
  menuList.innerHTML = "";
  Object.entries(menu).forEach(([item, price]) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <span>${item} - ₹${price}</span>
      <button onclick="addItem('${item}', ${price})">Add</button>
    `;
    menuList.appendChild(div);
  });
}

// Add item and ask for another order
function addItem(name, price) {
  total += price;
  menuList.classList.add("hidden");
  anotherOrderSection.classList.remove("hidden");
}

// Continue or stop ordering
function continueOrder(answer) {
  if (answer) {
    menuList.classList.remove("hidden");
    anotherOrderSection.classList.add("hidden");
  } else {
    anotherOrderSection.classList.add("hidden");
    totalSection.classList.remove("hidden");
    totalDisplay.textContent = total;
  }
}

// Reset order
function resetOrder() {
  total = 0;
  totalDisplay.textContent = "0";
  menuList.classList.remove("hidden");
  totalSection.classList.add("hidden");
  anotherOrderSection.classList.add("hidden");
}

renderMenu();
