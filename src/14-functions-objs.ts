(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(`Email: ${data.email}, Password: ${data.password}`);
  }

  login({
    email: 'klizmanzapata117@gmail.com',
    password: 123456
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any [] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Shirt',
    createdAt: new Date(1999, 10, 3),
    stock: 10,
    size: 'M'
  });
  console.log(products);
})();
