const { fillDate1 } = require("../pages/datePage");


Feature('date');

Scenario('check date', ({ I, datePage }) => {
    datePage.openPage();
    I.login('autotest48', 'autotest48');
    datePage.openPage();
    datePage.checkOpen();

    const title = `test-${Date.now()}`;

    if (title) {
        datePage.fillTitle(title);
    };


    date1 = datePage.fillDate1(['01:01:2001'], ['10:15:08']);
    date2 = datePage.fillDate2(['01:01:2001'], ['10:15']);
    date3 = datePage.fillDate3(['01:01:2023']);


    datePage.saveForm();
    datePage.checkOk();
    datePage.checkSave();

});

