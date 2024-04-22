(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Prod1',
    createdAt: new Date(1993, 1, 2),
    stock: 12
  });

  addProduct({
    title: 'Shirt',
    createdAt: new Date(1999, 10, 3),
    stock: 10,
    size: 'M'
  });

  products.push({
    title: 'Prod3',
    createdAt: new Date(1999, 6, 3),
    stock: 9,
    size: 'XL'
  });
  console.log(products);
})();
