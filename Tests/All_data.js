const formData = new DataTable([
    'title', 'text', 'note', 'numeric', 'lookup', 'lookupMultiple', 'lookupOrg',
    'lookupOrgMultiple', 'listOfValues', 'listOfValuesRadio', 'date', 'image',
    'ok'
  ]);
  
  formData.add([
    null, null, null, null, null, null, null, null, null, null, null, null, false
  ]);
  
  formData.add([
    'Title', 'Text', 'Note', '123454', 'auto_test_1', 'auto_test_2', '114/3', '111111',
    'Вариант 3', 'Вариант 2', ['01.01.2002', '11:34:45'], 'Screenshot_1.png', true
  ]);
  
  formData.add([
    null, 'Text', 'Note', '123454', 'auto_test_1', 'auto_test_2', '114/3', '111111',
    'Вариант 3', 'Вариант 2', ['01.01.2002', '11:34:45'], 'Screenshot_1.png', false
  ]);
  
  formData.add([
    'Title', null, 'Note', '123454', 'auto_test_1', 'auto_test_2', '114/3', '111111',
    'Вариант 3', 'Вариант 2', ['01.01.2002', '11:34:45'], 'Screenshot_1.png', false
  ]);
  
  formData.add([
    'Title', 'Text', null, '123454', 'auto_test_1', 'auto_test_2', '114/3', '111111',
    'Вариант 3', 'Вариант 2', ['01.01.2002', '11:34:45'], 'Screenshot_1.png', false
  ]);
  
  formData.add([
    'Title', 'Text', 'Note', null, 'auto_test_1', 'auto_test_2', '114/3', '111111',
    'Вариант 3', 'Вариант 2', ['01.01.2002', '11:34:45'], 'Screenshot_1.png', false
  ]);
  
  formData.add([
    'Title', 'Text', 'Note', '123454', null, 'auto_test_2', '114/3', '111111',
    'Вариант 3', 'Вариант 2', ['01.01.2002', '11:34:45'], 'Screenshot_1.png', false
  ]);
  
  formData.add([
    'Title', 'Text', 'Note', '123454', 'auto_test_1', null, '114/3', '111111',
    'Вариант 3', 'Вариант 2', ['01.01.2002', '11:34:45'], 'Screenshot_1.png', false
  ]);
  
  formData.add([
    'Title', 'Text', 'Note', '123454', 'auto_test_1', 'auto_test_2', null, '111111',
    'Вариант 3', 'Вариант 2', ['01.01.2002', '11:34:45'], 'Screenshot_1.png', false
  ]);
  
  formData.add([
    'Title', 'Text', 'Note', '123454', 'auto_test_1', 'auto_test_2', '114/3', null,
    'Вариант 3', 'Вариант 2', ['01.01.2002', '11:34:45'], 'Screenshot_1.png', false
  ]);
  
  formData.add([
    'Title', 'Text', 'Note', '123454', 'auto_test_1', 'auto_test_2', '114/3', '111111',
    null, 'Вариант 2', ['01.01.2002', '11:34:45'], 'Screenshot_1.png', false
  ]);
  
  formData.add([
    'Title', 'Text', 'Note', '123454', 'auto_test_1', 'auto_test_2', '114/3', '111111',
    'Вариант 3', null, ['01.01.2002', '11:34:45'], 'Screenshot_1.png', false
  ]);
  
  formData.add([
    'Title', 'Text', 'Note', '123454', 'auto_test_1', 'auto_test_2', '114/3', '111111',
    'Вариант 3', 'Вариант 2', null, 'Screenshot_1.png', false
  ]);
  
  formData.add([
    'Title', 'Text', 'Note', '123454', 'auto_test_1', 'auto_test_2', '114/3', '111111',
    'Вариант 3', 'Вариант 2', ['01.01.2002', '11:34:45'], null, false
  ]);

  module.exports = formData;