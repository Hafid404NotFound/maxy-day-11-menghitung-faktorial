function hitungFaktorial(n) {
  var hasil = 1;

  if (n === 0 || n === 1) {
    return 1;
  } else {
    for (let i = 2; i <= n; i++) {
      hasil *= i;
    }
    return hasil;
  }
}

var input = prompt("Masukkan bilangan bulat positif:");

var angka = parseInt(input);

// Memastikan input 
if (isNaN(angka) || angka < 0) {
  console.log("Harap masukkan bilangan bulat positif.");
} else {
  var hasil = hitungFaktorial(angka);
  alert("  Faktoroal dari " + angka + " Adalah " + hasil);
  console.log(" Faktor dari " + angka + " adalah " + hasil);
}
