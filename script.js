// 1
for (i=1; i<8; i++){
    console.log(i);
};

// 2
for (i=5; i < 26; i+=4){
    console.log(i);
}
console.log(b);

// 3a
const wizards = ['Harry Potter', 'Hermonie Granger', 'Ron Weasley'];

// 3b 
for (wiz of wizards){
    console.log(wiz);
};

// 4a
let harryPotterMovies = 0;

// 4b
while (harryPotterMovies < 8){
    harryPotterMovies+=1;
    // 4c
    console.log(harryPotterMovies);
}

// Bonus

// 5a
const hogwartsHouses = [
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
    'Slytherin'
];

// 5b
for (house of hogwartsHouses){
    for (i of house){
        console.log(i);
    }
};

// 6a
const quote = [
    'Yer',
    'A',
    'Wizard',
    'Harry'
];

// 6b
let text2 = '';
for (words of quote){
    text2 += words +' ';
}

console.log(text2);