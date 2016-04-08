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

  it("should be about 0.09 for binary logarithmic growth and 10k - 1M interval", () => {
    tools.orderOfGrowth(10000, Math.log2(10000), 1000000, Math.log2(1000000)).should.within(0.0870, 0.0881);
  });

  it("should be about 1.09 for N*log(N) growth and 10k - 1M interval", () => {
    tools.orderOfGrowth(10000, 10000 * Math.log2(10000), 1000000, 1000000 * Math.log2(1000000)).should.within(1.0870, 1.0881);
  });
});

describe("Running time", () => {
  it("should be measured correctly", () => {
    tools.runningTimeOf(() => sleep(0.8)).should.within(799, 801);
  });
});
