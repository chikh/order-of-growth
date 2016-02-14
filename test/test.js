'use strict';

let tools = require('../src/index.js');

let chai = require('chai');
chai.should();

const sleep = s => {
  let e = new Date().getTime() + (s * 1000);
  while (new Date().getTime() <= e) {
    ;
  }
}

describe("Order of growth", () => {
  it("should be 1 for linear growth", () => {
    tools.orderOfGrowth(100, 100, 1000, 1000).should.equal(1);
  });

  it("should be 2 for quadratic growth", () => {
    tools.orderOfGrowth(100, 100*100, 1000, 1000*1000).should.equal(2);
  });

  it("should be about 0.18 for binary logarithmic growth", () => {
    tools.orderOfGrowth(100, Math.log2(100), 1000, Math.log2(1000)).should.within(0.1760, 0.1761);
  });

  it("should be about 1.18 for N*log(N) growth", () => {
    tools.orderOfGrowth(100, 100 * Math.log2(100), 1000, 1000 * Math.log2(1000)).should.within(1.1760, 1.1761);
  });
});

describe("Running time", () => {
  it("should be measured correclty", () => {
    tools.runningTimeOf(() => sleep(0.8)).should.within(799, 801);
  });
});
