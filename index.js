const farmAnimals = ['cow', 'horse','sheep', 'pig', 'chicken'];

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

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

// Strings

let [moo='cow',neigh='horse',baa='sheep',oink='pig',cluck='chicken'] = farmAnimals;
console.log(farmAnimals);


const farmAnimals2 = [...farmAnimals];
farmAnimals2.splice(1,1);
let [bessie= 'cow',dolly='sheep',babe='pig',little='chicken'] = farmAnimals2;
console.log(farmAnimals2);

farmAnimals2.pop();
let [blackAndWhite='cow',black='sheep',pink='pig'] = farmAnimals2;
console.log(farmAnimals2);


let [red ='red',orange= 'orange',yellow= 'yellow',green= 'green',blue= 'blue',indigo= 'indigo',violet= 'violet'] = colors;
console.log(colors);


const colors2 = [...colors];
colors2.splice(-2,1);
let [r ='red',o='orange',y='yellow',g='green',b='blue',v='violet'] = colors2;
console.log(colors2);


const colors3 = colors.filter(function(word) {
  return word[0] === "i";
});
let [indg='indigo'] = colors3;
console.log(colors3);
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
let { muppetName = 'Miss Piggy', color = 'pink', song = "Never Before, Never Again", job = "Cast member of The Muppet Show",partner = "Kermit"  } = muppet;

console.log(muppet);
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects
const { song2 = 'Moving Right Along',song4 = 'I Hope That Something Better Comes Along' , nestedJob ='Host of The Muppet Show',nestedPartner ='Miss Piggy' } = nestedMuppet;
console.log(nestedMuppet)
// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner