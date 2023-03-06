const prompt = require('prompt-sync')({sigint: true});

const pokeType = ['Slimy', 'Deepsea', 'Purple', 'Grey', 'Red', 'Bigmouthed', 'Spotted', 'Rainbow', 'Electric', 'Golden'];
const pokeEdition = ['Scaly', 'Finned', 'Eel-like', 'Bottom-dwelling', 'Shimmering', 'Razor-toothed', 'Sleek', 'Luminous', 'Agile', 'Feisty'];
const pokeMon = ['Magikarp', 'Feebas', 'Carvanha', 'Basculin', 'Alomomola', 'Barboach', 'Wailmer', 'Qwilfish', 'Chinchou', 'Luvdisc'];

let time = '6:00am';
let pokeCaught = [];
let totalWeight = 0;
let totalValue = 0;
let hoursFished = 0;

console.log("You've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");
console.log();

while (hoursFished < 6 && totalWeight < 10) {
    console.log("==========================================\n\nThe time is " + time + ". So far you've caught: \n" + pokeCaught.length + " fish, " + totalWeight.toFixed(2) + " lbs, $" + totalValue.toFixed(2) + "\n");

    const poke = {};
    poke.name = pokeType[Math.floor(Math.random() * 10)] + " " + pokeEdition[Math.floor(Math.random() * 10)] + " " + pokeMon[Math.floor(Math.random() * 10)];
    poke.weight = Math.random() * 5;
    poke.value = Math.random() * 10;

    console.log("You caught a '" + poke.name + "' weighing " + poke.weight.toFixed(2) + " lbs \nand valued at $" + poke.value.toFixed(2));
    console.log();
    const action = prompt('Your action: [c]atch or [r]elease? ');

    if (action === 'c') {
        if (totalWeight + poke.weight > 10) {
            console.log();
            console.log("This fish would put you over 10 lbs, so you release it.");
        } else {
            pokeCaught.push(poke);
            totalWeight += poke.weight;
            totalValue += poke.value;
            console.log();
            console.log("You chose to keep the fish.");
            console.log();
        }
    } else {
        console.log();
        console.log("You chose to release the fish.");
        console.log();
    }

    time = incrementTime(time); // call the incrementTime() function to update the time
    hoursFished++;
}

console.log();
console.log("==========================================\n\nThe time is 12:00pm. Times up!\n\nYou caught " + pokeCaught.length + " fish:");

for (let i = 0; i < pokeCaught.length; i++) {
    console.log("* " + pokeCaught[i].name + ", " + pokeCaught[i].weight.toFixed(2) + " lbs, $" + pokeCaught[i].value.toFixed(2));
}

console.log();
console.log("Total weight: " + totalWeight.toFixed(2) + " lbs\nTotal value: $" + totalValue.toFixed(2));

function incrementTime(time) {
    let hour = parseInt(time.slice(0, 2));
    let minute = parseInt(time.slice(3));

    hour += 1;
    minute = 0;

    if (hour > 12) {
        hour = 1;
    }

    let hourString = '';
    let minuteString = '';

    if (hour < 10) {
        hourString = '0' + hour;
    } else {
        hourString = '' + hour;
    }

    if (minute < 10) {
        minuteString = '0' + minute;
    } else {
        minuteString = '' + minute;
    }

    return hourString + ':' + minuteString + (hour < 12 ? 'am' : 'pm');
}
  
  