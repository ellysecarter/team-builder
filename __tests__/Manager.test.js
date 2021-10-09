const Manager = require('../lib/Manager.js')

test('creates a new manager', () => {
    const manager = new Manager('Christopher', 4, 'manager@manager.com' ,326);
  
    
    expect(manager.officeNumber).toEqual(326)
    expect(manager.getOfficeNumber()).toEqual(326)
    expect(manager.getRole()).toBe('Manager')
  });