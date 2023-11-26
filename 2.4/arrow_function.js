// arrow függvény
ertekeles(1, 
    () => 'Jóóóó!', 
    function() {return 'Micsoda?!!!';});

let osszegez = (a, b) => a + b;
console.log(osszegez(2, 3))

let oszt = (a, b) => {
    if (b != 0) return a / b;
    else return null; 
};
console.log(oszt(1, 0));

/* 
let oszt2 = (a, b) => (b != 0) ? a / b : null;  
console.log(oszt2(1, 7)); 
*/

setTimeout(() => console.log('Hello!'), 5000);
setInterval(() => console.log('Hello!'), 3000);