const Employee = require('../lib/Employee.js')

test('creates a new employee', () => {
    const employee = new Employee('Ellyse', 1, 'test@email.com');
  
    expect(employee.name).toBe('Ellyse');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('test@email.com')
    expect(employee.getName()).toBe('Ellyse');
    expect(employee.getId()).toEqual(1);
    expect(employee.getEmail()).toEqual('test@email.com')
    expect(employee.getRole()).toBe('Employee')
  });




