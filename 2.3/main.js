// while ciklus
let szamlalo = 1;
while (szamlalo <= 10) {
    console.log('Hello!', szamlalo);
    szamlalo++;
}

let valasz = prompt('Adj meg egy pozitív számot!');
while (valasz <= 0) {
    valasz = prompt('Adj meg egy pozitív számot!');
}
console.log('ok');

// do-while ciklus
do {
    valasz = prompt('Adj meg egy pozitív számot!'); 
} while (valasz <= 0);
console.log('ok');

// for ciklus
for (let i = 0; i < 3; i++) {
    console.log('Hello!', i); 
}
console.log(i);