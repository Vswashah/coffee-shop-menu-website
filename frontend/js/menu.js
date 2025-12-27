/*const cart = {};

document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.dataset.name;
    const price = Number(btn.dataset.price);
    const qty = btn.parentElement.querySelector('.qty').value;

    cart[item] = { price, qty };
  });
});

function calculateBill() {
  const billItems = document.getElementById('bill-items');
  const totalText = document.getElementById('total');

  billItems.innerHTML = '';
  let total = 0;

  for (let item in cart) {
    if (cart[item].qty > 0) {
      const sub = cart[item].price * cart[item].qty;
      total += sub;
      billItems.innerHTML += `<p>${item} x ${cart[item].qty} = ₹${sub}</p>`;
    }
  }

  totalText.innerText = `Total: ₹${total}`;
  document.getElementById('bill').style.display = 'block';
}
*/
fetch("http://localhost:5000/api/menu")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("menu-container");
    container.innerHTML = "";

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
        <small>${item.category}</small>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error(err));
