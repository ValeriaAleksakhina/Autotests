// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    login: function (login, password) {
      this.waitForElement('input[placeholder="Введите логин"]', 30);
      this.fillField('input[placeholder="Введите логин"]', login);
      this.fillField('input[placeholder="Введите пароль"]', secret(password));
      this.click('Войти');
      this.waitForNavigation();
    }

  });
}
