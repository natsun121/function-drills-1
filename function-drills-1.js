function getYearOfBirth(age) {
  if(age < 0) {
    throw new Error('Age can not be negative');
  }
  return 2018 - age;
}


function createGreeting(name, age) {
  const yearOfBirth = 2018 - age;
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}

try {
  const greeting1 = createGreeting('Natalie', -24);
} catch (error) {
  console.log(error);
}
