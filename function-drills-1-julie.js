function getYearOfBirth(age) {
    
    
    return 2019 - age;
}

function createGreeting(name, age) {
    if (age === undefined || name === undefined ) {
        throw new Error("Arguments are not valid");
    }
    if (typeof age !== "number") {
        throw new TypeError(`${age} is not a number`);
    } if (typeof name !== "string") {
        throw new TypeError(`${name} is not a string`);
    }    
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    
    let yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
    let message = createGreeting("Julie", 1001);
    console.log(message);
} catch(e) {
    console.error(e.message);
}




