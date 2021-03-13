const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe('Initialization', () => {
    // it is what i expect it to do
    it("should return an object containing a 'name' property, 'id' property, and an 'email' property when called with the 'new' keyword", () => {
      const obj = new Intern();

      // what should happen
      expect('name' in obj).toEqual(true);
      expect('id' in obj).toEqual(true);
      expect('email' in obj).toEqual(true);
    });
  });

  describe('getSchool', () => {
    // it is what i expect it to do
    it("should return an intern object with 'name' 'id' 'email' and 'school' values.", () => {
      const { employee } = new Intern('Richard', 2, 'raseward14@gmail.com', 'DU');

      // what should happen
      expect('name' in employee).toBe('Richard');
      expect('id' in employee).toBe(1);
      expect('email' in employee).toBe('raseward14@gmail.com');
      expect('school' in employee).toBe('DU');
    });
  });
});