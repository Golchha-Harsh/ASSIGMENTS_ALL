//Array.from({length : 500},) create array of objects of length 500
//Array.from(,(_,i)=>({})) So here I have used underscore because value in our array is undefined initially i dont need value i dont care so simply i index which starts from 0 to 499
// Array.from(['a', 'b', 'c'], (value, i) => {
//   return `${i + 1}: ${value}`;
// });
//Creating 500 Data entries in array as object {id:1,name: Product 1...........so on}
export const products = Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
  }));
  