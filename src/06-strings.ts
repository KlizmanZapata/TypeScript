(() =>{
  let productTitle = 'My amazing product';
  // productTitle = 123; // Error
  // productTitle = true; // Error
  // productTitle = () => {}; // Error
  // productTitle = null; // Error
  productTitle = 'My amazing product change';
  console.log('productTitle', productTitle);

  const productDescription ='My amazing product description';
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  priice: ${productPrice}
  is new: ${isNew}
  `;

  console.log(summary);
})();
