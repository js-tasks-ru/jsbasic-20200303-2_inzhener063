let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read(a, b ) {
  
    this.a = a;
    this.b = b;
  }
};

calculator.read(3, 5);
alert(calculator.sum());
alert(calculator.mul());

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
