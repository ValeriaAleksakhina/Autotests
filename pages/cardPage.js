const { I } = inject();

module.exports = {
  fields: {
    title: 'div[data-cy="field-data.auto_field_title"] input',
    text: 'div[data-cy="field-data.auto_field_text"] input',
    boolean: 'input[name="field-data.auto_field_bool"]',
    note: 'div[data-cy="field-data.auto_field_note"] textarea',
    numeric: 'div[data-cy="field-data.auto_field_numeric"] input',
    lookup: 'div[data-cy="field-data.auto_field_lookup"] i[data-icon-name="ChevronDownMed"]',
    lookupMultiple: 'div[data-cy="field-data.auto_field_lookup_multiple"] i[data-icon-name="ChevronDownMed"]',
    lookupOrg: 'div[data-cy="field-data.auto_field_lookup_org"] i[data-icon-name="ChevronDownMed"]',
    lookupOrgMultiple: 'div[data-cy="field-data.auto_field_lookup_org_multiple"] i[data-icon-name="ChevronDownMed"]',
    listOfValues: 'div[data-cy="field-data.auto_field_list_of_values"] i[data-icon-name="ChevronDown"]',
    listOfValuesRadio: locate('div[data-cy="data.auto_field_list_of_values_radio"] .ms-ChoiceFieldLabel'),
    date: {
      date: 'div[data-cy="field-data.auto_field_date"] input[type=text]',
      time: 'div[data-cy="field-data.auto_field_date"] input[type=time]',
    },
    saveButton: 'button[name=Сохранить]',
    uploadButton: 'button[title="Загрузить/обрезать файл"]',
    imagePreview: 'img[alt="Image preview"]'
  },



  openPage() {
    I.amOnPage('/autotest_js_snippet_requirede033358e1f244813b546d0c4edab97f7/04f7d09f-1768-495a-865a-06e7a64811ac#vIn=true&cId=config_autotest_js_snippet_required_instance_forme033358e1f244813b546d0c4edab97f7&eId=04f7d09f-1768-495a-865a-06e7a64811ac&md=new&tp=view');
  },

  checkOpen() {
    I.waitForText("Создание карточки", 60);
    I.see("Создание карточки");
  },

  clickBoolean() {
    I.click(this.fields.boolean);
  },


  fillTitle(title) {
    I.fillField(this.fields.title, title);
  },
  fillText(text) {
    I.fillField(this.fields.text, text);
  },
  fillNote(note) {
    I.fillField(this.fields.note, note);
  },
  fillNumeric(numeric) {
    I.fillField(this.fields.numeric, numeric);
  },
  fillLookup(option) {
    I.click(this.fields.lookup);
    I.click(`span[data-cy="lookup-text-${option}"]`);
  },
  fillLookupMultiple(option) {
    I.click(this.fields.lookupMultiple);
    I.click(`span[data-cy="lookup-text-${option}"]`)
  },
  fillLookupOrg(option) {
    I.click(this.fields.lookupOrg);
    I.click(`span[data-cy="lookup-text-${option}"]`)
  },
  fillLookupOrgMultiple(option) {
    I.click(this.fields.lookupOrgMultiple);
    I.click(`span[data-cy="lookup-text-${option}"]`)
  },
  fillListOfValues(option) {
    I.click(this.fields.listOfValues);
    I.click(`button[title="${option}"]`)
  },
  fillListOfValuesRadio(option) {
    I.click(this.fields.listOfValuesRadio.withText(option))
  },
  fillDate(date, time) {
    I.fillField(this.fields.date.date, date)
    I.fillField(this.fields.date.time, time)
  },
  fillImage(image) {
    I.click(this.fields.uploadButton);
    I.waitForText('Загрузка изображения', 30);
    I.waitForElement('input[data-cy="Выберите файл"]', 30);
    I.attachFile('input[data-cy="Выберите файл"]', image);
    I.waitForElement('.cropper-crop');
    I.click('button[title="Вырезать"]');
    I.waitForElement('img[alt="cropped"]');
    I.click('button[title="Сохранить"]');
    I.waitForElement(this.fields.imagePreview);
  },
  saveForm() {
    I.click(this.fields.saveButton)
  },

  checkOk() {
    I.waitForNavigation();
  },

  checkError() {
    I.waitForText("Пожалуйста, заполните все обязательные поля", 30);
    I.click('ОК');
  }

}
