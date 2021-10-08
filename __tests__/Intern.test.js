const Intern = require('../lib/Intern.js')


test('creates a new intern', () => {
    const intern = new Intern('Lisa', 3, 'lisa@lisa.com', 'Cal State LA');
  
    expect(intern.name).toBe('Lisa');
    expect(intern.id).toEqual(3);
    expect(intern.email).toEqual('lisa@lisa.com')
    expect(intern.school).toEqual('Cal State LA')
  });