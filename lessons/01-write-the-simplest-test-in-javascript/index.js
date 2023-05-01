const { sum, subtract, sumAsync, subtractAsync } = require('./math');

// console.log('Adjust math.js to pass the test.');
// result = sum(3, 7);
// expected = 10;
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
// expect(result).toBe(expected);

// result = subtract(7, 3);
// expected = 4;
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
// expect(result).toBe(expected);

function sumTest() {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
}
test('sum adds numbers', sumTest);

function subtractTest() {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
}
test('subtract subtracts numbers', subtractTest);

test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtractAsync subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

// async function test(title, callback) {
//   try {
//     await callback();
//     console.log(`✅ ${title}`);
//   } catch (error) {
//     console.error(`❌ ${title}`);
//     console.error(error);
//   }
// }

// function expect(actual) {
//   return {
//     toBe(expected) {
//       if (actual !== expected) {
//         throw new Error(`${actual} is not equal to ${expected}`);
//       }
//     },
//   };
// }
