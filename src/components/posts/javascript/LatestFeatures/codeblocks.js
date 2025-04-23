export const code = {

  code1: `const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 }
];
const result = Object.groupBy(fruits, ({ quantity }) => quantity > 200 ? "ok" : "low");
console.log(result);
// Output: { ok: [{...}, {...}], low: [{...}, {...}] }
`,
  code2: `const date = Temporal.PlainDate.from({ year: 2024, month: 5, day: 1 });
console.log(date.toString());
// Output: 2024-05-01
`,
  code3: `const numbers = [1, 2, 3, 4, 5];
const lastEven = numbers.findLast(num => num % 2 === 0);
console.log(lastEven);
// Output: 4
`,
  code4: `const numbers = [1, 2, 3, 4, 5];
const lastEvenIndex = numbers.findLastIndex(num => num % 2 === 0);
console.log(lastEvenIndex);
// Output: 3
`,
  code5: `const data = await fetch('https://api.example.com/data');
console.log(data);
`,
  code6: `class Example {
  #privateField = 'secret';
  getPrivateField() {
    return this.#privateField;
  }
}
const instance = new Example();
console.log(instance.getPrivateField()); // Output: secret
`,
  code7: `class Example {
  static staticField = 'I am static';
  static staticMethod() {
    return 'Static method called';
  }
}
console.log(Example.staticField); // Output: I am static
console.log(Example.staticMethod()); // Output: Static method called
`,
  code8: `const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.at(-1)); // Output: cherry
`,
  code9: `const obj = { key: 'value' };
console.log(Object.hasOwn(obj, 'key')); // Output: true
`,
  code10: `try {
  throw new Error('Something went wrong', { cause: 'Network issue' });
} catch (err) {
  console.log(err.cause); // Output: Network issue
}
`,
  code11: `const regex = /(foo)/d;
const result = 'foobar'.match(regex);
console.log(result.indices); // Output: [[0, 3]]
`,
  code12: `const message = 'hello+world+JavaScript';
const updatedMessage = message.replaceAll('+', ' ');
console.log(updatedMessage);
// Output: hello world JavaScript
`,
  code13: `let a = true;
a &&= false;
console.log(a); // Output: false
`,
  code14: `let b = null;
b ||= 'default';
console.log(b); // Output: default
`,
  code15: `let c = undefined;
c ??= 'fallback';
console.log(c); // Output: fallback
`,
  code16: `const billion = 1_000_000_000;
console.log(billion); // Output: 1000000000
`,
  code17: `const promise1 = Promise.reject('Error');
const promise2 = Promise.resolve('Success');
Promise.any([promise1, promise2]).then(result => console.log(result));
// Output: Success
`,
  code18: `let obj = { name: 'example' };
const weakRef = new WeakRef(obj);
console.log(weakRef.deref()); // Output: { name: 'example' }
obj = null; // Object can now be garbage collected
`,
  code19: `const registry = new FinalizationRegistry((heldValue) => {
  console.log('Object with value ${'heldValue'} was garbage collected');
});
let obj = { name: 'example' };
registry.register(obj, 'example');
obj = null; // Triggers garbage collection
`

}
