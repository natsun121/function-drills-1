function jediName(firstName, lastName){
    return `${lastName[0]}${lastName[1]}${lastName[2]}${firstName[0]}${firstName[1]}`;
}
   
console.log(jediName("Julie", "Broderick"));

function beyond(num) {
  if (num === Infinity) {
    console.log(Infinity || -Infinity);  
    console.log("And beyond");
  } else if (num > 0 && num !== Infinity) {
    console.log("To infinity");
  } else if (num < 0 && num !== Infinity) {
    console.log("To negative infinity");
  } else {
    console.log("Staying home");
  }

}

beyond(Infinity);

function decode(word){
    let sentence = "";
    
    let wordArr = word.split(" ");

    for (let i = 0; i < wordArr.length; i++) {   
        if (wordArr[i][0] === "a") {
            sentence += wordArr[i][1];

        } else if (wordArr[i][0] === "b") {
            sentence += wordArr[i][2];

        } else if (wordArr[i][0] === "c") {
            sentence += wordArr[i][3];

        } else if (wordArr[i][0] === "d") {
            sentence += wordArr[i][4];

        } else {
            sentence += " ";
        }
    }
    return sentence;
}

console.log(decode('craft block argon meter bells brown croon droop'));

function howManyDays(month, leapYear) {
    switch(month) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December": {
            return `${month} has 31 days`;
            break;
        }
        case "February": {
            return  leapYear ? `${month} has 29 days` : `${month} has 28 days`;
        }
        case "April":
        case "June":
        case "September":
        case "November": {
            return `${month} has 30 days`;
            break;
        }
        default: {
            return `Please return a valid month`;
        }
    }
}

function rockPaperScissors(num){ 
    if (num !== 1 &&  num !==2 && num !== 3) {
        throw new Error("Invalid input");
    }

    try {
        let computer = Math.floor(Math.random() * 3) + 1 ;
        console.log(`computer: ${computer}`);
        if (num === 1) {
            if (computer === 2) {
                return "Paper beats Rock: Computer wins";
            } else if (computer === 3) {
                return "Rock beats Scissors: User wins";
            } else {
                return "It's a tie";
            }

        } else if (num === 2) {
            if (computer === 1) {
                return "Paper beats Rock: User wins";
            } else if (computer === 3) {
                return "Scissors beats Paper: Computer wins"
            } else {
                return "It's a tie";

            }
        } else {
            if (computer === 1) {
                return "Rock beats Scissors: Computer wins"
            } else if (computer === 2) {
                return "Scissors beats Paper : User wins"
            } else {
                return "It's a tie";
            }
        }      

    } catch(e) {
        console.error(e);
    }
}

console.log(rockPaperScissors(3));
