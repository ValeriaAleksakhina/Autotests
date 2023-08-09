/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'Tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://testing-dev.zocean.pw/ui/autotest_js_snippet_requirede033358e1f244813b546d0c4edab97f7/04f7d09f-1768-495a-865a-06e7a64811ac#vIn=true&cId=root',
      
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',

    cardPage: "./pages/cardPage.js",
    datePage: "./pages/datePage.js",
    listPage: "./pages/listPage.js",
  },
  name: 'exampleTests'
}