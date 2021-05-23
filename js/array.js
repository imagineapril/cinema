// первый вариант

const d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
const a1 = []; 
const a2 = []; 


for (let index = 0; index < d.length; index++) {
    if (d[index] % 2 == 0)  {  
    a1.push(d[index]);
    }

    else {
        a2.push(d[index]);

    }
}   
console.log(a1);
console.log(a2);


// второй вариант

const d1 = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
const a1 = d1.filter(function(v)  {
    return v%2 == 0;
});
console.log(a1);

const d2 = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
const a2 = d2.filter(function(v)  {
    return v%2 == 1;
});
console.log(a2);

