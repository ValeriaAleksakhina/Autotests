Feature('TextIsEmpty');

Scenario('open my website3', ({ I }) => {
  I.amOnPage('/autotest_js_snippet_requirede033358e1f244813b546d0c4edab97f7/04f7d09f-1768-495a-865a-06e7a64811ac#vIn=true&cId=root');
  I.fillField('Введите логин', 'autotest48');
  I.fillField('Введите пароль', secret('autotest48'));
  I.click('Войти');

  I.waitForNavigation();
  I.amOnPage('/autotest_js_snippet_requirede033358e1f244813b546d0c4edab97f7/04f7d09f-1768-495a-865a-06e7a64811ac#vIn=true&cId=config_autotest_js_snippet_required_instance_forme033358e1f244813b546d0c4edab97f7&eId=04f7d09f-1768-495a-865a-06e7a64811ac&md=new&tp=view');
  I.waitForText("Создание карточки", 60);
  I.see("Создание карточки");

  
  I.fillField('div[data-cy="field-data.auto_field_title"] input', 'Hello1');

  I.click('input[name="field-data.auto_field_bool"]');

 
  I.fillField('div[data-cy="field-data.auto_field_note"] textarea', 'Hello3');
  I.fillField('div[data-cy="field-data.auto_field_numeric"] input', '6664');
 

  I.click('div[data-cy="field-data.auto_field_lookup"] i[data-icon-name="ChevronDownMed"]');
  I.click('span[data-cy="lookup-text-auto_test_1"]');
  I.click('div[data-cy="field-data.auto_field_lookup_multiple"] i[data-icon-name="ChevronDownMed"]');
  I.click('span[data-cy="lookup-text-auto_test_2"]');

  I.click('div[data-cy="field-data.auto_field_lookup_org"] i[data-icon-name="ChevronDownMed"]');
  I.click('span[data-cy="lookup-text-114/3"]');
  I.scrollTo('span[title="Поле LOOKUP_ORG_MULTIPLE"]');

  I.click('div[data-cy="field-data.auto_field_lookup_org_multiple"] i[data-icon-name="ChevronDownMed"]');
  I.click('span[data-cy="lookup-text-111111"]');

  I.click('div[data-cy="field-data.auto_field_list_of_values"] i[data-icon-name="ChevronDown"]');
  I.click('button[title="Вариант 3"]');

  I.scrollPageToBottom();

  I.click(locate('div[data-cy="data.auto_field_list_of_values_radio"] .ms-ChoiceFieldLabel').withText("Вариант 2"));

  
  
  I.fillField('div[data-cy="field-data.auto_field_date"] input[type=text]', '01.02.2002');
  I.fillField('div[data-cy="field-data.auto_field_date"] input[type=time]', '11:34:36');
  
  I.attachFile('input[name="data.auto_field_image"]', 'Screenshot_1.png');

 
  I.click('Сохранить');
  I.waitForText("Пожалуйста, заполните все обязательные поля", 30);


});