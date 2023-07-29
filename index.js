const celsius = +prompt("دما را وارد کنید")


function transformation(celsius) {
      const Fahr1 = celsius * 1.8
      const Fahr2 = Fahr1 + 32

      return Fahr2
}

console.log(transformation(celsius))