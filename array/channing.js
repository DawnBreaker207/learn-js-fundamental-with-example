const eurToUsd = 1.1;
const totalDepositsUSD = movemnents
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

  console.log(totalDepositsUSD)