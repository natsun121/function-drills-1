function jediName(firstName, lastName) {
  let firstThreeLast = lastName.slice(0, 3);
  let firstTwoFirst = firstName.slice(0, 2);
  return firstThreeLast + firstTwoFirst;
}

// console.log(jediName('Natalie', 'Sun'));

function beyond(num) {
  if (!isFinite(num)) {
    console.log('And beyond');
  }
  if (isFinite(num) && num > 0) {
    console.log('To infinity');
  }
  if (isFinite(num) && num < 0) {
    console.log('To negative infinity');
  }
  if (num === 0) {
    console.log('Staying home');
  }
}


function decode(string) {
  let array = string.split(' ');
  let newArray = [];
  for (let i = 0; i < array.length; i++) {

    if (array[i][0] === 'a') {
      newArray.push(array[i][1]);
    }
    else if (array[i][0] === 'b') {
      newArray.push(array[i][2]);
    }
    else if (array[i][0] === 'c') {
      newArray.push(array[i][3]);
    }
    else if (array[i][0] === 'd') {
      newArray.push(array[i][4]);
    }
    else {
      newArray.push(' ');
    }
  }
  return newArray.join('');
}

// let test = decode('craft block argon meter bells brown croon droop');
//
// console.log(test);

function howManyDays(month, leapYear = false) {

  let result = '';
  if (month === 'February' && leapYear) {
    return 'February has 29 days';
  }

  switch (month) {
    case 'February':
    result = `${month} has 28 days`;
    break;
    case 'April': case 'June': case 'September': case 'November':
    result = `${month} has 30 days`;
    break;
    default:
    result = `${month} has 31 days`;
    break;
  }
  return result;
}

let test2= howManyDays('April', true);
console.log(test2);


function rockPaperScissors(choice) {
  const random = Math.floor(Math.random() * 3) + 1;
  let computer = '';
  if (random === 1) {
    computer = 'rock';
  } else if (random === 2) {
    computer = 'paper';
  } else {
    computer = 'scissors';
  }

  if (choice === 'rock') {
    if(computer === 'rock') {
      return 'Tie';
    } else if (computer === 'scissors') {
      return 'You lost';
    } else {
      return 'You won'
    }
  }
  if (choice === 'paper') {
    if(computer === 'paper') {
      return 'Tie';
    } else if (computer === 'rock') {
      return 'You lost';
    } else {
      return 'You won'
    }
  }
  if (choice === 'scissors') {
    if(computer === 'scissors') {
      return 'Tie';
    } else if (computer === 'rock') {
      return 'You lost';
    } else {
      return 'You won'
    }
  }
  else {
    throw new Error('Enter rock, paper, or scissors');
  }
}

// try {
//   test3 = rockPaperScissors('');
//   console.log(test3);
// } catch(e) {
//   console.log(e.message);
// }
