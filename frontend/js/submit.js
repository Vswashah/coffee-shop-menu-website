function calculateBill() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const billItems = document.getElementById("order-items");
  const totalEl = document.getElementById("order-total");

  billItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const p = document.createElement("p");
    p.textContent = `${item.name} × ${item.qty} = ₹${item.price * item.qty}`;
    billItems.appendChild(p);
    total += item.price * item.qty;
  });

  totalEl.textContent = `Total: ₹${total}`;
}

calculateBill();

function placeOrder() {
  alert("Order placed successfully ☕");
  localStorage.removeItem("cart");
}
