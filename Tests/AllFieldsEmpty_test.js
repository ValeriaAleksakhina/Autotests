Feature('AllFieldsEmpty_test');

Scenario('Open my site', ({ I }) => {
  I.amOnPage('/autotest_js_snippet_requirede033358e1f244813b546d0c4edab97f7/04f7d09f-1768-495a-865a-06e7a64811ac#vIn=true&cId=root');
  I.login("autotest48", "autotest48");

 
  I.amOnPage('/autotest_js_snippet_requirede033358e1f244813b546d0c4edab97f7/04f7d09f-1768-495a-865a-06e7a64811ac#vIn=true&cId=config_autotest_js_snippet_required_instance_forme033358e1f244813b546d0c4edab97f7&eId=04f7d09f-1768-495a-865a-06e7a64811ac&md=new&tp=view');
  I.waitForText("Создание карточки", 60);
  I.see("Создание карточки");

  I.waitForElement("button[name=Сохранить]");
  I.click('Сохранить');
  I.waitForText("Пожалуйста, заполните все обязательные поля", 30);

  pause();
});