const Intern = require('../lib/Intern.js')


test('creates a new intern', () => {
    const intern = new Intern('Lisa', 3, 'lisa@lisa.com', 'Cal State LA');
  
    
    expect(intern.school).toEqual('Cal State LA')
    expect(intern.getSchool()).toEqual('Cal State LA')
    expect(intern.getRole()).toBe('Intern')
  });