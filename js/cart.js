'use strict';

var cartDisplay = document.getElementById('cart-display');
var cart;

function getCart() {
    var parsedCart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(parsedCart.items);
}

function clearTable() {
    cartDisplay.innerHTML = null;
}

function makeTableHeaderRom() {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    cartDisplay.appendChild(trEl);
    thEl.textContent = 'Product';   
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    cartDisplay.appendChild(trEl);
    thEl.textContent = 'Quantity';    
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    cartDisplay.appendChild(trEl);
    thEl.textContent = 'Detele this item';
}

function makeTable() {
    for (var i = 0; i < cart.items.length; i++) {
        var trEl = document.createElement('tr');
        var tdElPic = document.createElement('td');
        var tdElQty = document.createElement('td');
        var tdElDelete = document.createElement('td');
        var img = document.createElement('img');
        img.src = cart.items[i].src;
        img.className = 'cart-img';
        tdElPic.appendChild(img);
        tdElQty.textContent = cart.items[i].quantity;
        var trashCan = document.createElement('img');
        trashCan.src = 'img/trash.gif';
        trashCan.id = i;
        trashCan.addEventListener('click', deleteItem);
        tdElDelete.appendChild(trashCan);
        trEl.appendChild(tdElPic);
        trEl.appendChild(tdElQty);
        trEl.appendChild(tdElDelete);
        document.getElementById('cart-display').appendChild(trEl);
    }
}

function renderCart() {
    getCart();
    clearTable();
    makeTableHeaderRom();
    makeTable();
}

renderCart();

function deleteItem() {
cart.deleteItem(event.target.id);
localStorage.setItem('cart', JSON.stringify(cart));
 renderCart();
}

function orderConfirm() {
    var orderConf = document.getElementById('order-confirm');
    orderConf.classList.remove('hide');
    orderConf.classList.add('fade-in');
    orderConf.textContent = `You have successfully ordered the order that you ordered!`;
}

function handleSubmit() {
    event.preventDefault();
    clearTable();
    orderConfirm();
    document.getElementById('place-order').reset();
}

document.getElementById('submit').addEventListener('click', handleSubmit);
