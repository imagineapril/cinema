// const pets = [
//     'Mum washed the frame',
//     3,
//     5,
//     true,
//     false,
// ];

// console.log (pets);



// for (let index = 0; index < pets.length; index++) {
//     if (index % 2 == 0)  {
//     console.log(pets[index]); 
//     }
// }

const cats = {
    'abyssinian': '😺',
    'american-bobtail' : '😼', 
    'siam': '😾',
    'bombay': '😻',
    };
    var keys = Object.keys(cats);

for (let i = 0; i < keys.length; i++ ) {


    if (keys[i].length>4) {
        console.log(cats[keys[i]]);
    }
}   

