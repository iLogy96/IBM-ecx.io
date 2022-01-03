class Tip {
  constructor(value) {
    this.tip = value;
  }

  getTipped() {
    return this.tip >= 50 && this.tip <= 300
      ? `The bill is ${this.tip}, the tip is ${
          this.tip * 0.2
        } and the total is ${this.tip + this.tip * 0.2}`
      : `The bill is ${this.tip}, the tip is ${
          this.tip * 0.15
        } and the total is ${this.tip + this.tip * 0.15}`;
  }
}

let bill1 = new Tip(275);
let bill2 = new Tip(40);
let bill3 = new Tip(300);
console.log(bill1.getTipped());
console.log(bill2.getTipped());
console.log(bill3.getTipped());
