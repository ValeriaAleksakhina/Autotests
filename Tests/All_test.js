
const formData = require('./All_data');

Feature('Ввод данных в карточку');

Data(formData).Scenario('Проверка обязательности полей', ({ I, cardPage, current }) => {
  cardPage.openPage();
  I.login("autotest48", "autotest48");
  cardPage.openPage();
  cardPage.checkOpen();

  if (current.title) {
    cardPage.fillTitle(current.title);
  };

  cardPage.clickBoolean();

  if (current.text) {
    cardPage.fillText(current.text);
  }

  if (current.note) {
    cardPage.fillNote(current.note)
  }

  if (current.numeric) {
    cardPage.fillNumeric(current.numeric);
  }

  if (current.lookup) {
    cardPage.fillLookup(current.lookup);
  }

  if (current.lookupMultiple) {
    cardPage.fillLookupMultiple(current.lookupMultiple);
  }

  if (current.lookupOrg) {
    cardPage.fillLookupOrg(current.lookupOrg);
  }

  if (current.lookupOrgMultiple) {
    cardPage.fillLookupOrgMultiple(current.lookupOrgMultiple);
  }

  if (current.listOfValues) {
    cardPage.fillListOfValues(current.listOfValues);
  }

  if (current.listOfValuesRadio) {
    cardPage.fillListOfValuesRadio(current.listOfValuesRadio);
  }

  if (current.date) {
    cardPage.fillDate(current.date[0], current.date[1]);
  }

  if (current.image) {
    cardPage.fillImage(current.image);
  }


  cardPage.saveForm();

  if (current.ok) {
    cardPage.checkOk();
  } else {
    cardPage.checkError();
  }

});

//Tests/All_test.js