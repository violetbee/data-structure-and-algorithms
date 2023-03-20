import type { Foo } from './types/foo';

const foo: Foo = {
  bar: 'baz',
};

// Gelen array'deki elemanları küçükten büyüğe sırala
let x = 1;
console.log('Outside: ' + x);
function myFunction() {
  // console.log("Inside before re-declaring: " + x)
  let x = 2;
  console.log('Inside after re-declaring: ' + x);
  if (x == 2) {
    let x = 3;
    console.log('Inside IF : ' + x);
    function mySecondFunction() {
      // console.log("Inside-Inside before: " + x)
      let x = 4;
      console.log('Inside-Inside after: ' + x);
    }
    mySecondFunction();
  }
}
myFunction();
