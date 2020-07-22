'use strict';

var productList = document.getElementById('product-list');
var totalNumItems = 0;
var itemAdded = document.getElementById('item-added');
var viewCart = document.getElementById('view-cart-btn');
itemAdded.classList.add('hide');
viewCart.classList.add('hide');

var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
var cart = new Cart([]);

function Image(number) {
    this.name = number;
    this.src = `img/${this.name}.jpg`;
    Image.all.push(this);
}

Image.all = [];
Image.allNames = ['R2D2 Bag', 'Banana Slicer', 'Bathroom Buddy', 'Toeless Rainboots', 'Breakfast Buddy', 'Meatball Bubblegum', 'Convex Chair', 'Cthulhu', 'Dog Duck Mask', 'Dragon Meat', 'Utensil Pens', 'Sweeper Shoes', 'Pizza Scissors', 'Shark Sleeping Bag', 'Baby Sweeper', 'Tauntaun Sleeping Bag', 'Unicorn Meat', 'Tentacle USB Drive', 'Self-Watering Can', 'Wine Glass'];

for (var i = 0; i < Image.allNames.length; i++) {
    new Image(Image.allNames[i]);
}

function makeList() {
    var productList = document.getElementById('product-list');
    for (var i = 0; i < Image.all.length; i++) {
        var optionEl = document.createElement('option');
        optionEl.value = Image.all[i].name;
        optionEl.textContent = Image.all[i].name;
        productList.appendChild(optionEl);
    }
}

makeList();

function handleSubmit() {
    var quantity = parseInt(document.getElementById('quantity').value)
    var name = productList.value;
    totalNumItems += quantity;
    cart.addItem(name, quantity);
    document.getElementById('view-cart-btn').textContent = `View/Edit Cart (${totalNumItems})`;
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('product-list').value = null;
    document.getElementById('quantity').value = null;
    itemAddedConfirm(); 
}

function itemAddedConfirm() {
    itemAdded.textContent = `${cart.items[0].quantity} ${cart.items[0].name}(s) added to cart`;
    itemAdded.classList.remove('hide');
    itemAdded.classList.add('fade-in');
    viewCart.classList.remove('hide');
    viewCart.classList.add('fade-in');
}

document.getElementById('add-to-cart').addEventListener('click', handleSubmit);