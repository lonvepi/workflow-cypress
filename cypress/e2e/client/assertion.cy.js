describe("Verify some tests assertion", () => {
  it("Verify string", () => {
    expect("10").to.be.string;
  });

  it("Verify number", () => {
    expect(10).to.eq(10);
  });

  it("Verify float number", () => {
    expect(10.2).to.eq(10.2);
  });

  it("Mak a test failed as expected", () => {
    expect(10.2).to.eq(10);
  });
});
