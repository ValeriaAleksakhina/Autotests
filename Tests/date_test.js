
Feature('Ввод дат');

Scenario('Проверка сохранения дат', ({ I, datePage, listPage }) => {
    datePage.openPage();
    I.login('autotest48', 'autotest48');
    datePage.openPage();
    datePage.checkOpen();

    const title = `test-${Date.now()}`;

    datePage.fillTitle(title);


    datePage.fillDate1('01.01.2001', '10:15:08');
    datePage.fillDate2('01.01.2001', '10:05');
    datePage.fillDate3('01.01.2023');


    datePage.saveForm();
    datePage.checkOk();

     
    listPage.scrollToBottom();
    listPage.chooseTitle(title);
  

    datePage.checkTitle(title);
    datePage.checkDate1('01.01.2001', '10:15:08');
    datePage.checkDate2('01.01.2001', '10:05');
    datePage.checkDate3('01.01.2023');

      
});

