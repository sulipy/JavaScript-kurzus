function ertekeles(valtozas, poz, neg){
    if (valtozas > 0) {
        console.log(poz())
    } else {
        console.log(neg())
    }
}

function dicseret() {
    return 'Szép, csak így tovább!';
}

function motivacio() {
    return 'Tanulj többet!';
}

function fenyegetes() {
    return 'A végén még megbuksz!'
}

ertekeles(-3, dicseret, fenyegetes);

// anonymus függvény es arrow függvény
ertekeles(-1, 
    function() {return 'Jóóóó!';}, 
    () => 'Micsoda?!!!');
