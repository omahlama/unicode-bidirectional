import { List } from 'immutable';
import { Run, et } from '../weak';

const AN = 0x0661 // U+0661 ARABIC-INDIC DIGIT ONE
const EN = 0x0032 // U+0032 DIGIT TWO
const ET = 0x00A3 // U+00A3 POUND SIGN

describe('Resolving Weak Types - ET (European Terminator)', () => {

  it('should change [ET,ET,EN] to [EN,EN,EN]', () => {
    const run = new Run({ points: List.of(ET, ET, EN) });
    const types = List.of('ET', 'ET', 'EN');
    expect(et(types, run)).to.equal(List.of('EN', 'EN', 'EN'));
  });

  it('should change [EN,ET,ET] to [EN,EN,EN]', () => {
    const run = new Run({ points: List.of(EN, ET, ET) });
    const types = List.of('EN', 'ET', 'ET');
    expect(et(types, run)).to.equal(List.of('EN', 'EN', 'EN'));
  });

  it('should change [AN,ET,EN] to [AN,EN,EN]', () => {
    const run = new Run({ points: List.of(AN, ET, EN) });
    const types = List.of('AN', 'ET', 'EN');
    expect(et(types, run)).to.equal(List.of('AN', 'EN', 'EN'));
  });

});
