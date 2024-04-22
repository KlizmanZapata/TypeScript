import {addProduct, calcStock, products} from './product.service';

addProduct({
  name: 'Prod1',
  createdAt: new Date(1993, 1, 2),
  stock: 5
});
addProduct({
  name: 'Prod2',
  createdAt: new Date(1999, 10, 3),
  stock: 10,
  size: 'M'
});
addProduct({
  name: 'Prod3',
  createdAt: new Date(1996, 6, 3),
  stock: 9,
  size: 'XL'
});

console.log(products);
const total = calcStock();
console.log(total);
