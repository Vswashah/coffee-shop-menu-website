let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:5000/api/menu")
    .then(res => res.json())
    .then(data => renderMenu(data))
    .catch(err => console.error("Error fetching menu:", err));
});

function renderMenu(menu) {
  const container = document.getElementById("menu-container");
  container.innerHTML = "";

  menu.forEach(item => {
    let qty = 0;

    const div = document.createElement("div");
    div.className = "menu-item";

    div.innerHTML = `
      <span class="item-name">${item.name}</span>
      <span class="item-price">$${item.price}</span>

      <div class="qty-control">
        <button class="qty-btn minus">−</button>
        <span class="qty">${qty}</span>
        <button class="qty-btn plus">+</button>
      </div>

      <button class="add-btn">Add</button>
    `;

    const qtySpan = div.querySelector(".qty");

    div.querySelector(".plus").onclick = () => {
      qty++;
      qtySpan.textContent = qty;
    };

    div.querySelector(".minus").onclick = () => {
      if (qty > 1) {
        qty--;
        qtySpan.textContent = qty;
      }
    };

    div.querySelector(".add-btn").onclick = () => {
  if (qty === 0) return; // 🚫 don't add zero items

  const existing = cart.find(i => i.name === item.name);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      name: item.name,
      price: item.price,
      qty
    });
  }

  qty = 0; // reset to zero
  qtySpan.textContent = qty;
};


    container.appendChild(div);
  });
}


function calculateBill() {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "submit.html";
}
