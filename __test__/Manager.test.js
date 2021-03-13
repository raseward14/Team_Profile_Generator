const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe('Initialization', () => {
    // it is what i expect it to do
    it("should return an object containing a 'name' property, 'id' property, and an 'email' property when called with the 'new' keyword", () => {
      const obj = new Manager();

      // what should happen
      expect('name' in obj).toEqual(true);
      expect('id' in obj).toEqual(true);
      expect('email' in obj).toEqual(true);
    });
  });

  describe('officeNumber', () => {
    // it is what i expect it to do
    it("should return a manager object with 'name' 'id' 'email' and 'officeNumber' values.", () => {
      const { employee } = new Manager('Richard', 2, 'raseward14@gmail.com', 226);

      // what should happen
      expect('name' in employee).toBe('Richard');
      expect('id' in employee).toBe(1);
      expect('email' in employee).toBe('raseward14@gmail.com');
      expect('officeNumber' in employee).toBe(226);
    });
  });
});