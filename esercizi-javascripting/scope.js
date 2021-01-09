let a = 1; let b = 2; let c = 3;

(function firstFunction () {
  b = 5; c = 6;

  (function secondFunction () {
    b = 8;

    (function thirdFunction () {
      let a = 7; let c = 9;

      (function fourthFunction () {
        a = 1; let c = 8
      })()
    })()
  })()
})()

console.log(`a: ${a}, b: ${b}, c: ${c}`)