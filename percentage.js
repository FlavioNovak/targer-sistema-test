const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;

function percentage(estate) {
  let calc = sp + rj + mg + es + outros;
  return parseFloat(((estate * 100) / calc).toFixed(2));
}
const calcPercentage =
  percentage(sp) +
  percentage(rj) +
  percentage(mg) +
  percentage(es) +
  percentage(outros);
console.log('Percentage SP', percentage(sp));
console.log('Percentage RJ',percentage(rj));
console.log('Percentage MG',percentage(mg));
console.log('Percentage ES',percentage(es));
console.log('Percentage OUTROS',percentage(outros));
console.log('Total Percentage',calcPercentage.toFixed());