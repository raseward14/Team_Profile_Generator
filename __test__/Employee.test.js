const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("Creates an array of employee objects with a name, id and email", () => {
    const employee = new Employee('Richard', '1', 'raseward14@gmail.com');

    expect(new employee.name).toBe(true);
    expect(new employee.id).toBe(true);
    expect(new employee.email).toBe(true);

  });

  it("toString returns _ for letters", () => {
    expect(new Letter("a").toString()).toBe("_");
  });

  describe("guess", () => {
    it("Correct guess returns true", () => {
      expect(new Letter("j").guess("j")).toBe(true);
    });

    it("Incorrect guess returns false", () => {
      expect(new Letter("j").guess("l")).toBe(false);
    });
  });

  describe("getSolution", () => {
    it("returns character", () => {
      expect(new Letter("l").getSolution()).toBe("l");
    });
  });
});