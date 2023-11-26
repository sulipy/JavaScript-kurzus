/* 
function kor_kerulet (r = 3) {
    PI = 3.14;
    return 2 * r * PI;
}
 */
kor_kerulet = function (r) {
    PI = 3.14;
    return 2 * r * PI;
};

sugar = 5;
console.log('A(z)', sugar, 
    'egység sugarú kör kerülete:', kor_kerulet(sugar).toFixed(2));