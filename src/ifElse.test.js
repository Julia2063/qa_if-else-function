'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call first arg one time', () => {
    const f = jest.fn();

    ifElse(f, () => {}, () => {});

    expect(f).toHaveBeenCalledTimes(1);
  });

  it('should call second arg one time, if first arg return true', () => {
    const f = jest.fn();

    ifElse(() => true, f, () => {});

    expect(f).toHaveBeenCalledTimes(1);
  });

  it('should call third arg one time, if first arg return true', () => {
    const f = jest.fn();

    ifElse(() => false, () => {}, f);

    expect(f).toHaveBeenCalledTimes(1);
  });
});
