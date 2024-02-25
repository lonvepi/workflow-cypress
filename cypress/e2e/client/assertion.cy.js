describe("Verify some tests assertion", () => {
  it("Verify string", () => {
    expect("10").to.be.string;
  });

  it("Verify number", () => {
    expect(10).to.eq(10);
  });
});
