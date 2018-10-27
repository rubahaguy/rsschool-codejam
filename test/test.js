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