const { expect } = require("chai");
const { sum } = require("./func");

describe("Let's test errors", () => {
  const err = "You need to pass 2 numbers at least";

  it("should throw error on 1 argument", () => {
    expect(() => sum(1)).to.throw(Error, err);
  });

  it("should throw error on no argument", () => {
    expect(sum).to.throw(Error, err);
  });
});
