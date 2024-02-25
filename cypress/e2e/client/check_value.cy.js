describe("Verify some tests assertion", () => {
  it("Check string", () => {
    expect("10").to.be.string;
  });

  it("Check number", () => {
    expect(10).to.eq(10);
  });
});
