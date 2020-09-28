const data = [
  {'type': 'socks', 'color': 'red', 'quantity': 10, 'priceForPair': '$3'},
  {'type': 'socks', 'color': 'green', 'quantity': 5, 'priceForPair': '$10'},
  {'type': 'socks', 'color': 'blue', 'quantity': 8, 'priceForPair': '$6'},
  {'type': 'hat', 'color': 'red', 'quantity': 7, 'price': '$5'},
  {'type': 'hat', 'color': 'green', 'quantity': 0, 'price': '$6'},
  {'type': 'socks', 'color': 'blue', 'priceForPair': '$6'},
  {'type': 'socks', 'color': 'red', 'quantity': 10, 'priceForPair': '$3'},
  {'type': 'socks', 'color': 'white', 'quantity': 3, 'priceForPair': '$4'},
  {'type': 'socks', 'color': 'green', 'priceForPair': '$10'},
  {'type': 'socks', 'color': 'blue', 'quantity': 2, 'priceForPair': '$6'},
  {'type': 'hat', 'color': 'green', 'quantity': 3, 'price': '$5'},
  {'type': 'hat', 'color': 'red', 'quantity': 1, 'price': '$6'},
  {'type': 'socks', 'color': 'blue', 'priceForPair': '$6'}
]

const COLOR_RED = 'red';
const COLOR_GREEN = 'green';
const COLOR_BLUE = 'blue';

let socksQuantity = 0;
let redHatsQuantity = 0;
let costRed = 0;
let costGreen = 0;
let costBlue = 0;

data.forEach((item) => {

  if (item.type === 'socks') {
    if (item.quantity && item.priceForPair) {
      socksQuantity += item.quantity;
    }
  }

  if (item.type === 'hat') {
    if (item.color === COLOR_RED && item.quantity) {
      redHatsQuantity += item.quantity;
    }
  }

  if (item.price || item.priceForPair) {
    const priceField = item.price || item.priceForPair;
    const itemPrice = +priceField.slice(1);

    if (item.color === COLOR_RED) {
      costRed += itemPrice;
    }

    if (item.color === COLOR_GREEN) {
      costGreen += itemPrice;
    }

    if (item.color === COLOR_BLUE) {
      costBlue += itemPrice;
    }
  }
})

console.log(`Socks - ${socksQuantity}`);
console.log(`Red Hats - ${redHatsQuantity}`);
console.log(`Red - ${costRed}, Green - ${costGreen}, Blue - ${costBlue}`);
