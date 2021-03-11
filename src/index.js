module.exports = function toReadable (number) {
  if (number / 1 === 0) {
    return 'zero';
  }
  const arr1 = [' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
  const arr2 = [' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
  let res = [];

  let hundreds = Math.floor(number / 100);
  let tens = Math.floor(number % 100 / 10);
  let ones = number % 10;
   
  if (hundreds != 0) {
    res.push(arr1[hundreds - 1] + ' hundred')
  } 

  if (tens >= 2) {
    res.push(arr2[tens - 2]);
    res.push(arr1[ones - 1]);
  } else {
    res.push(arr1[number % 100 - 1]);
  }
  return res.join('').trim();
}
