(() => {
  let userId: string | number;
  userId = 10123;
  userId = 'asasa';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string: ${myText.toLowerCase()}`);
    } else {
      console.log(`number: ${myText.toFixed(1)}`);
    }
  }
  greeting('Hello');
  greeting(100.85644);
})();
