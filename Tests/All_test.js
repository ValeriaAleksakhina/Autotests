Feature('All_test');


Scenario('open my website', ({ I, cardPage }) => {
  cardPage.openPage();
  I.login("autotest48", "autotest48");
  cardPage.openPage();
  cardPage.checkOpen();

  cardPage.saveForm();
  I.waitForText("Пожалуйста, заполните все обязательные поля", 30);
  I.click('ОК');

  cardPage.fillTitle('Hello1');
  cardPage.clickBoolean();
  cardPage.fillText('Hello2');
  cardPage.fillNote('Hello3');
  cardPage.fillNumeric('6664');
  cardPage.fillLookup('auto_test_1');
  cardPage.fillLookupMultiple('auto_test_2');
  cardPage.fillLookupMultiple('auto_test_3');
  cardPage.fillLookupOrg('114/3');
  cardPage.fillLookupOrgMultiple('111111');
  cardPage.fillListOfValues('Вариант 3');
  cardPage.fillListOfValuesRadio('Вариант 2');
  cardPage.fillDate('01.02.2002', '11:34:36');
  cardPage.fillImage('Screenshot_1.png');


  cardPage.saveForm();
  I.waitForNavigation();
  
});