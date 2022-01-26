const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const input2 = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
    expect(input).toEqual(input2)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { name: '    jane   ', dog: '  barry ' };
    const expected = { name: 'jane', dog: 'barry' };
    utils.trimPropertiesMutation(input);
    expect(input).toEqual(expected);
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { name: '    jane   ', dog: '  barry ' };
    const originalInputCopy = { name: '    jane   ', dog: '  barry ' };
    utils.trimPropertiesMutation(input);
    expect(input).not.toEqual(originalInputCopy);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const array = [{integer: 1}, {integer: 4}, {integer: 2}, {integer: -1}];
    const expected = 4;
    const actual = utils.findLargestInteger(array);
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const expected = 3;
    const actual = counter.countDown();
    expect(actual).toBe(expected);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const expected = 2;
    counter.countDown();
    const actual = counter.countDown();
    expect(actual).toBe(expected);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    const expected = 0;
    for (let i = 0; i < 6; i++) {
      counter.countDown();
    }
    const actual = counter.countDown();
    expect(actual).toBe(expected);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  const iterateSeasons = (int) => {
    let currentSeason;
    for (let i = 0; i < int; i++) {
      currentSeason = seasons.next();
    }
    return currentSeason;
  }
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const expected = 'summer';
    const actual = iterateSeasons(1);
    expect(actual).toBe(expected);
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    const expected = 'fall';
    const actual = iterateSeasons(2);
    expect(actual).toBe(expected);

  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    const expected = 'winter';
    const actual = iterateSeasons(3);
    expect(actual).toBe(expected);

  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    const expected = 'spring';
    const actual = iterateSeasons(4);
    expect(actual).toBe(expected);

  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    const expected = 'summer';
    const actual = iterateSeasons(5);
    expect(actual).toBe(expected);

  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    const expected = 'spring';
    const actual = iterateSeasons(40);
    expect(actual).toBe(expected);
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  // test('[15] driving the car returns the updated odometer', () => {})
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
