const Engineer = require('../lib/Engineer.js')

test('creates a new engineer', () => {
    const engineer = new Engineer('David', 2, 'class@class.com', 'david@github.com');
  
    expect(engineer.name).toBe('David');
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toEqual('class@class.com')
    expect(engineer.github).toEqual('david@github.com')
  });