/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'Tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://testing-dev.zocean.pw/ui',
      
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