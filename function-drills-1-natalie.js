function getYearOfBirth(age) {
  return 2018 - age;
}


function createGreeting(name, age) {
  if (name === undefined || age === undefined) {
    throw new Error('Arguments not valid.');
  }

  if (age < 0) {
    throw new Error('Age can not be negative.');
  }

  if (typeof age !== 'number') {
    throw new TypeError('Age must be a number.')
  }

  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
  const greeting1 = createGreeting('Natalie', 24);
  console.log(greeting1);
} catch (e) {
  console.log(e.message);
}
