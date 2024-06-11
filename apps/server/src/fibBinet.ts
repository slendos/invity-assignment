import { BigNumber } from 'bignumber.js';

const binetMagicNumber = BigNumber(5).sqrt();

export function fibBinet(input: number) {
  const a = BigNumber(binetMagicNumber).plus(1).exponentiatedBy(input);
  const b = BigNumber(1).minus(binetMagicNumber).exponentiatedBy(input);
  const c = BigNumber(binetMagicNumber).multipliedBy(BigNumber(2).exponentiatedBy(input));
  return a.minus(b).dividedBy(c).toFraction(1)[0].toString();
}
