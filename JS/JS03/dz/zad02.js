function shapesCalculator(a, b, c) {
  if (typeof a !== "number" && typeof b !== "number" && c !== "number") {
    return "Nije broj";
  } else if (a < 0 || b < 0 || c < 0) {
    return "Unijeli ste negativan broj";
  } else if (b === undefined && c === undefined) {
    let P = Math.pow(a, 2) * Math.PI;
    let O = 2 * Math.PI * a;
    return "Površina kruga iznosi: " + P.toFixed(2) + "; Opseg kruga iznosi: " + O.toFixed(2);
  } else if (c === undefined) {
    let P = a * b;
    let O = 2 * (a + b);
    return (
      "Površina pravokutnika iznosi: " + P.toFixed(2) + "; Opseg pravokutnika iznosi: " + O.toFixed(2)
    );
  } else {
    let P = (a * b) / 2;
    let O = a + b + c;
    let Alpha = Math.asin(Math.sin(a / c))*(180/Math.PI);
    let Beta = 90 - Alpha;
    return (
      "Površina trokuta iznosi: " +
      P.toFixed(2) +
      "; Opseg trokuta iznosi: " +
      O.toFixed(2) +
      "; Kut alfa iznosi: " +
      Alpha.toFixed(2) + "°" +
      "; Kut beta iznosi: " +
      Beta.toFixed(2) + "°"
    );
  }
}
console.log(shapesCalculator(4));
console.log(shapesCalculator(-1));
console.log(shapesCalculator(6, 8, -10));
console.log(shapesCalculator(8, 4));
console.log(shapesCalculator(1, 10));
console.log(shapesCalculator(6, 8, 10));
