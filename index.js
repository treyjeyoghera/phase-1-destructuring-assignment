const farmAnimals = 'cow horse sheep pig chicken';
const[moo,neigh,baa,oink,cluck] =['cow', 'horse', 'sheep', 'pig', 'chicken']
const { bessie, dolly, babe, little } = { bessie: "cow", dolly: "sheep", babe: "pig", little: "chicken" };

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const { blackAndWhite, black, pink } = { blackAndWhite: "cow", black: "sheep", pink: "pig" };

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
// 
const [red, orange, yellow, green, blue, indigo, violet] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const { muppetName, color, song, job, partner } = muppet;


const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const { 
  nestedName, 
  nestedColor, 
  album: { 
    theMuppetMovie: { 
      song1, 
      song2, 
      song3, 
      song4 
    } 
  }, 
  nestedJob, 
  nestedPartner 
} = nestedMuppet;

console.log(nestedName); 
console.log(nestedColor); 
console.log(song1); 
console.log(song2); 
console.log(song3); 
console.log(song4); 
console.log(nestedJob); 
console.log(nestedPartner); 


// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner