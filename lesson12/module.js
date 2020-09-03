// Belajar membuat module

// function Penjumlahan(a, b) {
//   return a + b;
// }

// function Pengurangan(a, b) {
//   return a - b;
// }

// module.exports = { Penjumlahan, Pengurangan };

exports.Penjumlahan = (a, b) => {
  return a + b;
};

exports.Pengurangan = (a, b) => {
  return a - b;
};
