const assert = require('assert');

describe('make', () => {
    const make = require('../src/make.js');
    const sum = function(a, b) {
        return a + b;
    }

    it('make_test_1', () => {
      const result = make(1)(2)(3)(sum);
      assert.deepEqual(result, 6);
    });
  
    it('make_test_2', () => {
        const result = make(3)(1)(59)(sum);
        assert.deepEqual(result, 63);
    });
  
    it('make_test_3', () => {
        const result = make(8)(21)(228)(322)(1488)(sum);
        assert.deepEqual(result, 2067);
    });
  
    it('make_test_4', () => {
        const result = make(-342)(23)(56780)(-3568)(2342)(234545)(-3)(sum);
        assert.deepEqual(result, 289777);
    });
  });

  describe('sumOfOther', () => {
    const sumOfOther = require('../src/sumOfOther.js');

    it('sumOfOther_test_1', () => {
      const result = sumOfOther([1, 2, 3]);
      assert.deepEqual(result, [5, 4, 3]);
    });
  
    it('sumOfOther_test_2', () => {
        const result = sumOfOther([2, 56, 7]);
      assert.deepEqual(result, [63, 9, 58]);
    });
  
    it('sumOfOther_test_3', () => {
        const result = sumOfOther([25, 24, 3, 11, 18]);
      assert.deepEqual(result, [56, 57, 78, 70, 63]);
    });
  
    it('sumOfOther_test_4', () => {
        const result = sumOfOther([25, -24, 3, -11, 18]);
      assert.deepEqual(result, [-14, 35, 8, 22, -7]);
    });
  });