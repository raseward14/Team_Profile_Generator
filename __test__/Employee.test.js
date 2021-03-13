const Employee = require("../lib/Employee");

describe('Employee', () => {
  describe('Initialization', () => {
    // it is what i expect it to do
    it("should return an object containing a 'name' property, 'id' property, and an 'email' property when called with the 'new' keyword", () => {
      const obj = new Employee();

      // what should happen
      expect('name' in obj).toEqual(true);
      expect('id' in obj).toEqual(true);
      expect('email' in obj).toEqual(true);
    });
  });
  it("should return an employee object with 'name' 'id' and 'email' values.", () => {
    const { employee } = new Employee('Richard', 2, 'raseward14@gmail.com');

    expect('name' in employee).toBe('Richard');
    expect('id' in employee).toBe(1);
    expect('email' in employee).toBe('raseward14@gmail.com');
  });
});

  

  

    

