const cart = {};

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
