const { I } = inject();
module.exports = {

  fields: {
    title: 'div[data-cy="field-data.name"] input',
    date1: {
      date: 'div[data-cy="field-data.date_1"] input[type=text]',
      time: 'div[data-cy="field-data.date_1"] input[type=time]',
    },
    date2: {
      date: 'div[data-cy="field-data.date_6"] input[type=text]',
      time: 'div[data-cy="field-data.date_6"] input[type=time]',
    },
    date3: {
      date: 'div[data-cy="field-data.date_7"] input[type=text]'
    },
    saveButton: 'button[name=Сохранить]',

  },

  openPage() {
    I.amOnPage('/test_field_date_1e033358e1f244813b546d0c4edab97f7/689e8596-7c14-4f56-be52-4e0200e9ad9a#vIn=true&cId=config_test_field_date_1_instance_forme033358e1f244813b546d0c4edab97f7&eId=689e8596-7c14-4f56-be52-4e0200e9ad9a&md=new&tp=view');
  },

  checkOpen() {
    I.waitForText("Создание карточки 'Тестирование date полей 1'", 60);
    I.see("Создание карточки 'Тестирование date полей 1'");
  },

  fillTitle(title) {
    I.fillField(this.fields.title, title);
  },
  fillDate1(date, time) {
    I.fillField(this.fields.date1.date, date)
    I.fillField(this.fields.date1.time, time)
  },
  fillDate2(date, time) {
    I.fillField(this.fields.date2.date, date)
    I.fillField(this.fields.date2.time, time)
  },
  fillDate3(date) {
    I.fillField(this.fields.date3.date, date)
  },

  saveForm() {
    I.click(this.fields.saveButton)
  },
  checkOk() {
    I.waitForNavigation();
  },

  checkTitle(title) {
    I.waitForElement(this.fields.title, 20);
    I.seeInField(this.fields.title, title)
  },

  checkDate1(date, time) {
    I.seeInField(this.fields.date1.date, date)
    I.seeInField(this.fields.date1.time, time)
  },
  checkDate2(date, time) {
    I.seeInField(this.fields.date2.date, date)
    I.seeInField(this.fields.date2.time, time)
  },
  checkDate3(date) {
    I.seeInField(this.fields.date3.date, date)
  },
};



