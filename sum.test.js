const { expect } = require("chai");
const { sum } = require("./func");

describe("Let's add some number", () => {
  it("1+2+3+4 should be equal to 10", () => {
    expect(sum(1, 2, 3, 4)).to.equal(10);
  });

  it("1+2+3+4+5 should be equal to 15", () => {
    expect(sum(1, 2, 3, 4, 5)).to.equal(15);
  });
});
