// Getting input from user
const prompt = require('prompt-sync')(); 

// Arrays for different types of fish
const pokeType = ['Slimy', 'Deepsea', 'Purple', 'Grey', 'Red', 'Bigmouthed', 'Spotted', 'Rainbow', 'Electric', 'Golden'];
const pokeEdition = ['Scaly', 'Finned', 'Eel-like', 'Bottom-dwelling', 'Shimmering', 'Razor-toothed', 'Sleek', 'Luminous', 'Agile', 'Feisty'];
const pokeMon = ['Magikarp', 'Feebas', 'Carvanha', 'Basculin', 'Alomomola', 'Barboach', 'Wailmer', 'Qwilfish', 'Chinchou', 'Luvdisc'];  

// Initializing variables
let time = '6:00am';
let pokeCaught = [];
let totalWeight = 0;
let totalValue = 0;
let hoursFished = 0;

// Game instructions
console.log("You've gone fishing! Try to maximize the value of your caught fish. You can fish \nfor six hours (till 12:00pm) and can catch at most 10 lbs of fish.");
console.log();

// Fishing loop
while (hoursFished < 6 && totalWeight < 10) {
  console.log("==========================================\n\nThe time is " + time + ". So far you've caught: \n" + pokeCaught.length + " fish, " + totalWeight.toFixed(2) + " lbs, $" + totalValue.toFixed(2) + "\n");

  // Generating random fish
  const poke = {};
  poke.name = pokeType[Math.floor(Math.random() * 10)] + " " + pokeEdition[Math.floor(Math.random() * 10)] + " " + pokeMon[Math.floor(Math.random() * 10)];
  poke.weight = Math.random() * 5;
  poke.value = Math.random() * 10;

  // Displaying the caught fish and prompting for user input
  console.log("You caught a '" + poke.name + "' weighing " + poke.weight.toFixed(2) + " lbs \nand valued at $" + poke.value.toFixed(2));
  console.log();
  const action = prompt('Your action: [c]atch or [r]elease? ');

  // Processing user input
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

  // Updating time and hours fished
  let hour = parseInt(time.slice(0, 2));
  let minute = parseInt(time.slice(3));
  
  if (minute === 0) {
    minute = 30;
  } else {
    hour++;
    minute = 0;
  }
  
  if (hour > 12) {
    hour = 1;
  }
  
  time = hour + ':' + (minute.toString().padStart(2, '0')) + ' ' + (hour < 12 ? 'am' : 'pm');
  hoursFished++;
}

// Displaying results
console.log();
console.log("==========================================\n\nThe time is 12:00pm. Times up!\n\nYou caught " + pokeCaught.length + " fish:");

// Displaying each caught fish
for (let i = 0; i < pokeCaught.length; i++) {
console.log("* " + pokeCaught[i].name + ", " + pokeCaught[i].weight.toFixed(2) + " lbs, $" + pokeCaught[i].value.toFixed(2));
}

console.log();
console.log("Total weight: " + totalWeight.toFixed(2) + " lbs\nTotal value: $" + totalValue.toFixed(2));