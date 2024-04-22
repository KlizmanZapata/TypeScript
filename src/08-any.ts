(() =>{
  let myDynamicVar: any;
//myDynamicVar = 100;
//myDynamicVar = 'hola';
  myDynamicVar = null;
  myDynamicVar = true;
  myDynamicVar = () => {};
  myDynamicVar = {};
  myDynamicVar = [];
  myDynamicVar = undefined;

  myDynamicVar = 'hola';
  const rta =(myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 100;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
