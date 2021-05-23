let someObject = {
}

const a = document.getElementById('someObject-key');
const b = document.getElementById('someObject-value');



const btn = document.getElementById('btn');

btn.onclick = function()    {
    let key = a.value 
    let value = b.value 
    someObject[key] = value;
    console.log (someObject);  
}

