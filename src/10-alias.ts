(() => {
  type UserId = string | number | boolean;
  let userId: UserId;

//Literal types
type Sizes = 'S' | 'M' | 'L' | 'XL';
let shirtSize: Sizes;
shirtSize = 'S';
shirtSize = 'M';
shirtSize = 'L';
shirtSize = 'XL';
//shirtSize = 'XS'; // Error

function greeting(myText: UserId, size: Sizes) {
  if (typeof myText === 'string') {
    console.log(`string: ${myText.toLowerCase()}`);
  }
}
greeting(1111, 'S');
greeting('1111', 'XL');
})();
