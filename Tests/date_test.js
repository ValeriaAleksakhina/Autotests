
const dateData = require('./date_data');
Feature('date');

Data(dateData).Scenario('check date', ({ I, datePage, current }) => {
    datePage.openPage();
    I.login('autotest48', 'autotest48');
    datePage.openPage();
    datePage.checkOpen();

    if (current.title) {
        datePage.fillTitle(current.title);
    };

    if (current.date1) {
        datePage.fillDate1(current.date1[0], current.date1[1]);
    };

    if (current.date2) {
        datePage.fillDate2(current.date2[0], current.date2[1]);
    };

    if (current.date3) {
        datePage.fillDate3(current.date3[0]);
    };
    datePage.saveForm();

    if (current.ok) {
        datePage.checkOk();

    };
    if (current.checkSave){
        datePage.checkSave()
    }
    pause();
});
