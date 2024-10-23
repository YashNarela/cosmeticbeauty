function updateQuantity(item, change) {
  const qtyInput = document.getElementById(`${item}-qty`);
  let currentQty = parseInt(qtyInput.value);
  const newQty = currentQty + change;

  if (newQty >= 1) {
    qtyInput.value = newQty;
    updateTotalPrice();
  }
}

function removeItem(item) {
  const cartItem = document.querySelector(`#${item}-qty`).closest(".cart-item");
  cartItem.remove();
  updateTotalPrice();
}

function updateTotalPrice() {
  const item1Qty = document.getElementById("item1-qty")
    ? parseInt(document.getElementById("item1-qty").value)
    : 0;
  const item2Qty = document.getElementById("item2-qty")
    ? parseInt(document.getElementById("item2-qty").value)
    : 0;

  const item1Price = 25.99 * item1Qty;
  const item2Price = 15.99 * item2Qty;

  const totalPrice = item1Price + item2Price;
  document.getElementById("total-price").textContent = `$${totalPrice.toFixed(
    2
  )}`;
}

function checkout() {
  alert("Proceeding to checkout...");
}
