'use strict';

var Cart = function(items) {
    this.items = items;
  };

Cart.prototype.addItem = function(name, quantity) {
    var selectedItem = new CartItem(name, quantity);
    this.items.unshift(selectedItem);
    }

Cart.prototype.deleteItem = function(item) {
    this.items.splice(item, 1)

}

var CartItem = function(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.src = `img/${this.name}.jpg`
}

