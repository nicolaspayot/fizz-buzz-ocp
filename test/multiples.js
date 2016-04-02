import _ from 'lodash';

export default function(start, end) {
  const numbers = _.range(1, 100);
  let samples;

  const value = function() {
    return samples || numbers;
  };

  const of = function(...multiples) {
    samples = (samples || numbers).filter(
      n => multiples.reduce((acc, m) => acc && (n % m === 0), true)
    );
    return this;
  };

  const excluding = function(...multiples) {
    const toRemove = multiples.map(m => numbers.filter(n => n % m === 0));
    samples = _.without((samples || numbers), ..._.uniq(_.flatten(toRemove)));
    return this;
  };

  return { value, of, excluding };
};
