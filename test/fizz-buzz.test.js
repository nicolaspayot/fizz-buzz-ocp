import test from 'ava';
import multiples from 'multiples';
import { FizzBuzz } from '../src/fizz-buzz';

let fizzBuzz;

test.beforeEach('FizzBuzz', t => {
  fizzBuzz = new FizzBuzz([
    { val: 3, output: 'Fizz' },
    { val: 5, output: 'Buzz' },
    { val: 7, output: 'Bang' },
    { val: 10, output: 'Boom' }
  ]);
});

test('should print `Fizz` when input is multiple of 3', t => {
  const numbers = multiples(1, 100).of(3).not.of(5, 7, 10).value();
  numbers.forEach(n => t.is(fizzBuzz.print(n), 'Fizz'));
});

test('should print `Buzz` when input is multiple of 5', t => {
  const numbers = multiples(1, 100).of(5).not.of(3, 7, 10).value();
  numbers.forEach(n => t.is(fizzBuzz.print(n), 'Buzz'));
});

test('should print `FizzBuzz` when input is multiple of 3 and 5', t => {
  const numbers = multiples(1, 100).of(3, 5).not.of(10).value();
  numbers.forEach(n => t.is(fizzBuzz.print(n), 'FizzBuzz'));
});

test('should print `Bang` when input is multiple of 7', t => {
  const numbers = multiples(1, 100).of(7).not.of(3, 5, 10).value();
  numbers.forEach(n => t.is(fizzBuzz.print(n), 'Bang'));
});

test('should print `Boom` when input is multiple of 10', t => {
  const numbers = multiples(1, 100).of(10).not.of(3, 5, 7).value();
  numbers.forEach(n => t.is(fizzBuzz.print(n), 'Boom'));
});

test('should print input number when it is not a multiple of 3, 5, 7 or 10', t => {
  const numbers = multiples(1, 100).not.of(3, 5, 7, 10).value();
  numbers.forEach(n => t.is(fizzBuzz.print(n), n));
});
