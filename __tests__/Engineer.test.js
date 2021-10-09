const Engineer = require('../lib/Engineer.js')

test('creates a new engineer', () => {
    const engineer = new Engineer('David', 2, 'class@class.com', '@david');
  

    expect(engineer.github).toEqual('@david')
    expect(engineer.getRole()).toBe('Engineer')
    expect(engineer.getGitHub()).toEqual('@david')
  });


