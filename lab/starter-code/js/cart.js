/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.querySelector('tbody');
  tbody.innerHTML = "";
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody = document.querySelector('tbody');
  for (let i = 0; i < cart.items.length; i++) {
    console.log(cart.items[i])
    let tRow = document.createElement('tr');
    let delLink = document.createElement('td');
    delLink.textContent = "X";
    delLink.setAttribute("id", `${i}`);
    tRow.appendChild(delLink);
    let tDataQty = document.createElement('td');
    tDataQty.textContent = cart.items[i].quantity;
    tRow.appendChild(tDataQty);
    let tDataItem = document.createElement('td');
    tDataItem.textContent = cart.items[i].product;
    tRow.appendChild(tDataItem);
    tbody.appendChild(tRow);
  }
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  let itemIndexStr = event.target.id;
  console.log(itemIndexStr);
  let itemIndex = parseInt(itemIndexStr);
  console.log(typeof itemIndex);
  cart.removeItem(itemIndex);
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();