(() =>{
  let prices = [100, 200, 300, 'hola', true];
  //prices.push('asas'); // Error
  //prices.push(true); // Error
  //prices.push(() => {}); // Error
  prices.push(400);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = [100, 'hola', true];
  mixed.push(200);
  mixed.push('adios');
  mixed.push(false);
  mixed.push(() => {});
  mixed.push([]);

  let numbers = [1, 2, 3, 4, 5];
  numbers.map(item => item * 2);
})();
