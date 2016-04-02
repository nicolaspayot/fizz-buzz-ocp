export class FizzBuzz {

  constructor(multiples) {
    this.multiples = multiples;
  }

  isMultiple(n, m) {
    return n % m === 0;
  }

  print(n) {
    return this.multiples
      .filter(m => this.isMultiple(n, m.val))
      .map(m => m.output)
      .join('') || n;
  }
}
