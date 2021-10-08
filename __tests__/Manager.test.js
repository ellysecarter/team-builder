const Manager = require('../lib/Manager.js')

test('creates a new manager', () => {
    const manager = new Manager('Christopher', 4, 'manager@manager.com' ,326);
  
    expect(manager.name).toBe('Christopher');
    expect(manager.id).toEqual(4);
    expect(manager.email).toEqual('manager@manager.com')
    expect(manager.officeNumber).toEqual(326)
  });