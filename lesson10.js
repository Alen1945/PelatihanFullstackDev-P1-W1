//REGEX
// . => mewakili semua karakter
// \s => mewakili spasi
// \S => bukan ada spasi
// \w => alphanumeric
// \W => bukan alphanumeric
// \d => angka
// \D => bukan angka

// + => banyak char >= 1
// * => banyak char => 0
// {a} => char sebanyak a

console.log(/(?=\s)/.test("sayamakan"));
