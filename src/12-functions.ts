(() => {
type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ){
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('Shirt', new Date(), 100, 'M');
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);


  const createProductToJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P2', new Date(), 100);
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);
  console.log(producto2.size);

})();
