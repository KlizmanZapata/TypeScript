(() => {
  // let myNumber: number = undefined; // Error
  // let myString: string = null; // Error
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 10;

  let myString: string | undefined = undefined;
  myString = 'Hello World!';

  function hi(name: string | null){
    let hello = 'Hello ';
    if(name){
      hello += name;
    }else{
      hello += ' nobody';
    }
    console.log(hello);
  }

  function hiV2(name: string | null){
    let hello = 'Hello ';
    hello += name?.toLowerCase() || ' nobody';
    console.log(hello);
  }

  hi('John');
  hi(null);

  hiV2('John');
  hiV2(null);
})();
