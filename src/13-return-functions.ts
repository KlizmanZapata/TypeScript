(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`Total: ${rta}`);
  }


  const rta = calcTotal([10, 20, 30, 40, 50]);
  console.log(rta);

  printTotal([10, 20, 30, 40, 50]);
})();
