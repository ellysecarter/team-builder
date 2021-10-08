const Employee = require('../lib/Employee.js')

test('creates a new employee', () => {
    const employee = new Employee('Ellyse', 1, 'test@email.com');
  
    expect(employee.name).toBe('Ellyse');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))
  });




  
// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`



